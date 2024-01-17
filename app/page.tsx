import { SearchInput } from "@/components/search-input";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center  h-screen justify-center w-full">
			<div className="z-10 max-w-xl w-full items-center justify-between font-mono text-sm lg:flex">
				<h1 className="flex flex-col">
					<span className={"text-4xl font-bold font-fredoka text-black"}>
						FIND IT.<br></br>PASTE IT.
					</span>
					<span className={"text-4xl font-bold font-fredoka text-black"}>
						COOK IT.
					</span>
				</h1>
				<div>
					<SearchInput />
				</div>
			</div>
		</main>
	);
}
