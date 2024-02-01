"use client";

import { useStreamResponse } from "@/store/use-stream-response";
import { Loader2Icon } from "lucide-react";

export const StreamingLoader = () => {
	const isStreaming = useStreamResponse((state) => state.isStreaming);
	return (
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
	);
};
