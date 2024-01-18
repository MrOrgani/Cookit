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
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
	url: z.string().url(),
});

export default function Home() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { url: "" },
	});
	const { isValid, isSubmitting } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			// await axios.patch(`/api/courses/${courseId}`, values);
			toast.success("Course updated");
		} catch (error) {
			toast.error("Something went wrong");
		}
	};

	return (
		<main className="p-4 min-h-screen items-center h-screen justify-center w-full">
			<div className="z-10 max-w-xl w-full items-center justify-between font-mono text-sm flex flex-col">
				<h1 className="flex flex-col">
					<span className={"text-4xl font-bold font-fredoka text-black"}>
						FIND IT.<br></br>PASTE IT.
					</span>
					<span className={"text-4xl font-bold font-fredoka text-black"}>
						COOK IT.
					</span>
				</h1>

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
										<SearchInput />
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
		</main>
	);
}
