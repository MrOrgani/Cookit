"use client";

import { useStreamResponse } from "../hooks/useStreamResponse";
import { useTimedState } from "../hooks/useTimedState";
import { wordpressCSS } from "./wordpress-css";

export const RecipeDisplay = () => {
	const htmlCode = useStreamResponse((state) => state.htmlCode);
	const htmlCodeWithTimeout = useTimedState(htmlCode, 1500);

	return (
		<div className="mt-4 grow w-full flex items-center justify-center">
			{htmlCodeWithTimeout?.length ? (
				<iframe
					id={"translated-recipe"}
					className="w-full h-full  max-w-2xl rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)]"
					srcDoc={`<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="utf-8">
        <title>Recipe</title>
        <meta name="description" content="Recipe">
        <meta name="author" content="Recipe">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${wordpressCSS}
        
        </head>
        <body>
        ${htmlCodeWithTimeout}
        </body>
        </html>`}
				/>
			) : (
				<div className="w-full h-full  max-w-2xl bg-gray-200 rounded-md shadow-[5px_5px_0px_rgba(0,0,0,1)]">
					<div className="flex items-center justify-center h-full">
						<span className="text-black  px-4">
							Paste a recipe url (from{" "}
							<a
								className="underline"
								href="https://www.budgetbytes.com/"
								target="_blank"
							>
								https://www.budgetbytes.com/
							</a>
							) in the input bar 👆
						</span>
					</div>
				</div>
			)}
		</div>
	);
};
