"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

export const SearchInput = () => {
	const [value, setValue] = useState("");

	return (
		<div className=" relative">
			<Search className=" absolute left-3 top-3 h-4 w-4 animate-pulse to-sky-600 " />
			<Input
				onChange={(e) => setValue(e.target.value)}
				className="w-full rounded-md bg-slate-100 py-1.5 pl-8 text-slate-800"
				placeholder="Search for courses"
				value={value}
			/>
		</div>
	);
};
