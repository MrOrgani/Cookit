import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
	title: "Cookit",
	description: "Translate your recipes to your language",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
