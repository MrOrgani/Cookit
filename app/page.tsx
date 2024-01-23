import { UrlForm } from "./_components/url-form";

export default function Home() {
	return (
		<main className="p-4 min-h-screen items-center h-screen justify-center w-full">
			<div className="z-10 w-full items-center justify-between font-mono text-sm flex flex-col h-full">
				<h1 className="flex flex-col">
					<span className={"text-4xl font-bold font-fredoka text-black"}>
						FIND IT.<br></br>PASTE IT.
					</span>
					<span className={"text-4xl font-bold font-fredoka text-black"}>
						COOK IT.
					</span>
				</h1>
				<UrlForm />
			</div>
		</main>
	);
}
