"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipboardPaste } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { useUserPreferences } from "@/hooks/use-user-preferences";
import { useStreamResponse } from "@/hooks/useStreamResponse";

const formSchema = z.object({
	url: z.string().url(),
});

interface UrlFormProps {
	children: React.ReactNode;
}

export const UrlForm = ({ children }: UrlFormProps) => {
	const setHtmlCode = useStreamResponse((state) => state.setHtmlCode);
	const removeHtmlCode = useStreamResponse((state) => state.removeHtmlCode);
	const setIsStreaming = useStreamResponse((state) => state.setIsStreaming);

	const apikey = useUserPreferences((state) => state.apiKey);
	const language = useUserPreferences((state) => state.language);
	const unit = useUserPreferences((state) => state.unit);
	const setOpenSettings = useUserPreferences((state) => state.setOpenSettings);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { url: "" },
	});
	const { isValid, isSubmitting } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			if (!apikey) {
				toast.error("Please enter an API key");
				setOpenSettings(true);
				return;
			}

			const res = await fetch(`/api/recipe/openai`, {
				method: "POST",
				body: JSON.stringify({ ...values, apikey, language, unit }),
			});

			console.log(res);
			const body = res.body;

			if (!res.ok || !body) throw new Error("Something went wrong");

			toast.success("Recipe is being processed");
			setIsStreaming(true);
			removeHtmlCode();
			const reader = body.getReader();

			const getReaderChuck = async () => {
				const { done, value } = await reader.read();
				if (done) {
					setIsStreaming(false);
					return;
				}
				const newChunk = new TextDecoder("utf-8").decode(value);
				setTimeout(() => {
					setHtmlCode(newChunk);
					getReaderChuck(), 2000;
				});
			};

			await getReaderChuck();
		} catch (error) {
			toast.error("Something went wrong");
		}
	};

	return (
		<>
			<div className=" shrink-0 w-full max-w-2xl">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="mt-4 space-y-4"
					>
						<FormField
							control={form.control}
							name="url"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className=" relative shadow-[3px_3px_0px_rgba(0,0,0,1)] rounded-md  w-full">
											<ClipboardPaste className=" absolute left-3 top-3 h-4 w-4 animate-pulse to-sky-600 " />
											<Input
												className="w-full rounded-md bg-slate-100 py-1.5 pl-8 text-slate-800"
												placeholder="Paste a recipe url"
												{...field}
												value={field.value || ""}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2 justify-center">
							<Button
								className="shadow-[3px_3px_0px_rgba(0,0,0,1)]"
								type="submit"
								disabled={!isValid || isSubmitting}
							>
								Go !
							</Button>
							{children}
						</div>
					</form>
				</Form>
			</div>
		</>
	);
};
