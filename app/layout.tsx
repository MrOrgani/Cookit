import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import { Settings } from "./_components/settings";
import "./globals.css";

export const metadata: Metadata = {
	title: "Cookit",
	description: "Translate your recipes to your language",
};
const montserrat = Montserrat({ subsets: ["latin"], weight: ["800"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<Toaster />
				<div>
					<Settings />
				</div>
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
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
