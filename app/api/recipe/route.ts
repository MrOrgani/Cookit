import axios from "axios";
import { NextResponse } from "next/server";

import { JSDOM } from "jsdom";

export async function POST(req: Request) {
	try {
		const { url } = await req.json();

		if (!url) {
			return new NextResponse("URL is required", {
				status: 500,
			});
		}

		const fetchedRecipeWebsite = (await axios.get(url)).data;

		// Create a virtual DOM using jsdom
		const dom = new JSDOM(fetchedRecipeWebsite);
		const document = dom.window.document;

		// Retrieve the div with a particular id
		const myDiv = document.querySelector("[id^='wprm-recipe-container-']");

		const myDivString = myDiv?.outerHTML || "";

		return NextResponse.json(myDivString);
	} catch (error: any) {
		console.log("[RECIPE]", error);
		return new NextResponse(error.message, {
			status: 500,
		});
	}
}
