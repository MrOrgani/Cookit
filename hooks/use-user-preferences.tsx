import { create } from "zustand";

export type Language = "fr" | "en" | "es";
export type Unit = "metric" | "imperial";

interface IUserPreferences {
	apiKey: string;
	setApiKey: (newApiKey: string) => void;
	language: Language;
	setLanguage: (selectedLanguage: Language) => void;
	unit: Unit;
	setUnit: (selectedUnit: Unit) => void;
	openSettings: boolean;
	setOpenSettings: (open: boolean) => void;
}

export const useUserPreferences = create<IUserPreferences>((set) => ({
	apiKey: "",
	setApiKey: (newApiKey: string) => set({ apiKey: newApiKey }),
	language: "fr",
	setLanguage: (selectedLanguage: Language) =>
		set({ language: selectedLanguage }),
	unit: "metric",
	setUnit: (selectedUnit: Unit) => set({ unit: selectedUnit }),
	openSettings: false,
	setOpenSettings: (open: boolean) => set({ openSettings: open }),
}));
