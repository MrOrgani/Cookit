"use client";
import React from "react";
import { SearchInput } from "@/components/search-input";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Loader2Icon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { wordpressCSS } from "./WPcss";

const formSchema = z.object({
	url: z.string().url(),
});

export const UrlForm = () => {
	const [htmlCode, setHtmlCode] = React.useState<string>("");
	const [isStreaming, setIsStreaming] = React.useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { url: "" },
	});
	const { isValid, isSubmitting } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const res = await fetch(`/api/recipe/openai`, {
				method: "POST",
				body: JSON.stringify(values),
			});
			toast.success("Recipe is being processed");

			const body = res.body;

			if (!body) throw new Error("No body");

			setIsStreaming(true);
			setHtmlCode("");
			const reader = body.getReader();

			const getReaderChuck = async () => {
				const { done, value } = await reader.read();
				if (done) {
					setIsStreaming(false);
					return;
				}
				const newPiece = new TextDecoder("utf-8").decode(value);
				setHtmlCode((prev) => prev + newPiece);
				await getReaderChuck();
			};

			await getReaderChuck();
		} catch (error) {
			toast.error("Something went wrong");
		}
	};

	return (
		<>
			<div className=" shrink-0">
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
										<div className=" relative">
											<Search className=" absolute left-3 top-3 h-4 w-4 animate-pulse to-sky-600 " />
											<Input
												className="w-full rounded-md bg-slate-100 py-1.5 pl-8 text-slate-800"
												placeholder="Search for a recipe"
												{...field}
												value={field.value || ""}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2">
							<Button type="submit" disabled={!isValid || isSubmitting}>
								Go !
							</Button>
						</div>
					</form>
				</Form>
			</div>
			<div>
				{isStreaming && (
					<div className="flex items-center gap-x-2">
						<div className="animate-spin">
							<Loader2Icon className=" h-4 w-4 text-sky-600" />
						</div>
						<span>Your recipe is being translated...</span>
					</div>
				)}
			</div>

			<div className="mt-4 grow w-full">
				<iframe
					className="w-full h-full  max-w-2xl"
					srcDoc={`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <title>Recipe</title>
                        <meta name="description" content="Recipe">
                        <meta name="author" content="Recipe">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <link rel="stylesheet" href="https://www.budgetbytes.com/wp-content/plugins/convertpro/assets/modules/css/cp-popup.min.css?ver=1.7.7" media="all">
                        ${wordpressCSS}
                        
                    </head>
                            <body>
                                ${htmlCode}
                            </body>
                        </html>`}
				/>
			</div>
		</>
	);
};
