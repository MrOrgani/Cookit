import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserPreferences } from "@/hooks/use-user-preferences";
import { cn } from "@/lib/utils";

interface ApikeyInputProps {}

export const ApikeyInput = ({}: ApikeyInputProps) => {
	const apiKey = useUserPreferences((state) => state.apiKey);
	const setApiKey = useUserPreferences((state) => state.setApiKey);

	return (
		<div>
			Enter your API key here:
			<Input
				className={cn(
					"w-full mt-2 shadow-[3px_3px_0px_rgba(0,0,0,1)]",
					!apiKey && "border-red-500"
				)}
				placeholder="Your OpenAI API key"
				value={apiKey}
				onChange={(e) => setApiKey(e.target.value)}
			/>
			{!apiKey && (
				<Label className="text-red-600 text-xs italic">
					Please, provide an API key to use the app. You can get one on{" "}
					<a
						href="https://openai.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500"
					>
						openai.com
					</a>
				</Label>
			)}
		</div>
	);
};
