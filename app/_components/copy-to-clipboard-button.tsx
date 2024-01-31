"use client";

import { Button } from "@/components/ui/button";
import { useStreamResponse } from "@/hooks/useStreamResponse";
import html2canvas from "html2canvas";
import { ClipboardCopyIcon } from "lucide-react";
import { toast } from "sonner";

export const CopyImageToClipboardButton = () => {
	const htmlCode = useStreamResponse((state) => state.htmlCode);
	const isStreaming = useStreamResponse((state) => state.isStreaming);

	const copyImageToClipboard = async () => {
		const node = document.querySelector("#translated-recipe");
		const iframeDocument =
			(node as HTMLIFrameElement).contentDocument ||
			(node as HTMLIFrameElement)?.contentWindow?.document;

		if (!iframeDocument || !iframeDocument?.defaultView) {
			toast.error("No recipe to download");
			return;
		}
		try {
			const canvas = await html2canvas(iframeDocument.body, {
				scrollY: -window.scrollY,
			});

			const imgData = canvas.toDataURL();
			const data = await fetch(imgData);
			const blob = await data.blob();

			navigator.clipboard.write([
				new ClipboardItem({
					[blob.type]: blob,
				}),
			]);
			toast.success("Image copied to clipboard");
		} catch (error) {
			toast.error("Something went wrong");
		}
	};

	return (
		<Button
			className="shadow-[3px_3px_0px_rgba(0,0,0,1)]"
			onClick={copyImageToClipboard}
			type="button"
			disabled={!htmlCode.length || isStreaming}
			title="Add Image to clipboard"
		>
			<ClipboardCopyIcon className="h-4 w-4 " />
		</Button>
	);
};
