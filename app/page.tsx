import { CopyImageToClipboardButton } from "./_components/copy-to-clipboard-button";
import { DownloadImageButton } from "./_components/download-image-button";
import { RecipeDisplay } from "./_components/recipe-display";
import { StreamingLoader } from "./_components/streaming-loader";
import { UrlForm } from "./_components/url-form";

export default function Home() {
	return (
		<>
			<UrlForm>
				<CopyImageToClipboardButton />
				<DownloadImageButton />
			</UrlForm>
			<StreamingLoader />
			<RecipeDisplay />
		</>
	);
}
