"use client";

import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import { ImageDown } from "lucide-react";
import { toast } from "sonner";
import { useStreamResponse } from "../hooks/useStreamResponse";

export const DownloadImageButton = () => {
	const htmlCode = useStreamResponse((state) => state.htmlCode);
	const isStreaming = useStreamResponse((state) => state.isStreaming);

	const downloadImage = async () => {
		const node = document.querySelector("#translated-recipe");
		const iframeDocument =
			(node as HTMLIFrameElement).contentDocument ||
			(node as HTMLIFrameElement)?.contentWindow?.document;

		if (!iframeDocument || !iframeDocument?.defaultView) {
			toast.error("No recipe to download");
			return;
		}
		html2canvas(iframeDocument.body, { scrollY: -window.scrollY }).then(
			(canvas) => {
				const imgData = canvas.toDataURL();
				// You can now use imgData as the source for an image element, or download it as an image
				const link = document.createElement("a");
				link.download = "recipe.png";
				link.href = imgData;
				link.click();
			}
		);
	};

	return (
		<Button
			className="shadow-[3px_3px_0px_rgba(0,0,0,1)]"
			onClick={downloadImage}
			type="button"
			disabled={!htmlCode.length || isStreaming}
			title="Download image"
		>
			<ImageDown className="h-4 w-4 " />
		</Button>
	);
};
