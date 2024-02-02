import { Button } from "@/components/ui/button";
import { useStreamResponse } from "@/store/use-stream-response";

interface AbortGenerationButtonProps {}

export const AbortGenerationButton = ({}: AbortGenerationButtonProps) => {
	const setIsStreaming = useStreamResponse((state) => state.setIsStreaming);
	const cancelGeneration = async () => {
		// const res = await fetch("/api/openai", { method: "DELETE" });
		// console.log("AbortGenerationButton", res);
		// toast.success("The recipe has been stopped");
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
