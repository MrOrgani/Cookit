import { UrlForm } from "./_components/url-form";

export default function Home() {
	return (
		<main className="p-4 min-h-screen items-center h-screen justify-center w-full ">
			<div className="z-10 w-full items-center justify-between font-mono text-sm flex flex-col h-full">
				<h1 className="flex flex-col font-montserrat text-4xl text-black">
					<span className={""}>
						FIND IT.<br></br>PASTE IT.
					</span>
					<span className={""}>COOK IT.</span>
				</h1>
				<UrlForm />
			</div>
		</main>
	);
}
