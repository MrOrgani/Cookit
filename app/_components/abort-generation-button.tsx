import { Button } from "@/components/ui/button";
import { useStreamResponse } from "@/store/use-stream-response";
import { toast } from "sonner";

interface AbortGenerationButtonProps {}

export const AbortGenerationButton = ({}: AbortGenerationButtonProps) => {
	const setIsStreaming = useStreamResponse((state) => state.setIsStreaming);
	const cancelGeneration = () => {
		fetch("/api/openai", {
			method: "DELETE",
		});
		toast.success("The recipe has been stopped");
		setIsStreaming(false);
		return;
	};
	return (
		<Button
			className="shadow-[3px_3px_0px_rgba(0,0,0,1)]"
			type="button"
			onClick={(e) => {
				e.preventDefault();
				cancelGeneration();
			}}
		>
			Stop
		</Button>
	);
};
