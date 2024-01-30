import { Montserrat } from "next/font/google";
import { CopyImageToClipboardButton } from "./_components/copy-to-clipboard-button";
import { DownloadImageButton } from "./_components/download-image-button";
import { RecipeDisplay } from "./_components/recipe-display";
import { StreamingLoader } from "./_components/streaming-loader";
import { UrlForm } from "./_components/url-form";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

export default function Home() {
	return (
		<main className="p-4 min-h-screen items-center h-screen justify-center w-full ">
			<div className="z-10 w-full items-center justify-between font-mono text-sm flex flex-col h-full">
				<h1
					className={`flex flex-col ${montserrat.className} text-4xl text-black`}
				>
					<span className={""}>
						FIND IT.<br></br>PASTE IT.
					</span>
					<span className={""}>COOK IT.</span>
				</h1>
				<UrlForm>
					<CopyImageToClipboardButton />
					<DownloadImageButton />
				</UrlForm>
				<StreamingLoader />
				<RecipeDisplay />
			</div>
		</main>
	);
}
