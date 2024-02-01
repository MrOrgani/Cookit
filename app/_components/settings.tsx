"use client";
import { SettingsIcon } from "lucide-react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useUserPreferences } from "@/store/use-user-preferences";
import { ApikeyInput } from "./apikey-input";
import { LanguageSelector } from "./language-selector";
import { UnitSelector } from "./unit-selector";

export const Settings = () => {
	const openSettings = useUserPreferences((state) => state.openSettings);
	const setOpenSettings = useUserPreferences((state) => state.setOpenSettings);
	return (
		<Popover
			open={openSettings}
			onOpenChange={(opened) => setOpenSettings(opened)}
		>
			<PopoverTrigger className="fixed right-2 top-2">
				<SettingsIcon className="  hover:animate-spin" />
			</PopoverTrigger>
			<PopoverContent className="space-y-4">
				<ApikeyInput />
				<LanguageSelector />
				<UnitSelector />
			</PopoverContent>
		</Popover>
	);
};
