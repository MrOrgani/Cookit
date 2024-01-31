import { create } from "zustand";

interface IUserPreferences {
	apiKey: string;
	setApiKey: (newApiKey: string) => void;
	language: string;
	setLanguage: (newLanguage: string) => void;
}

export const useUserPreferences = create<IUserPreferences>((set) => ({
	apiKey: "",
	setApiKey: (newApiKey: string) => set({ apiKey: newApiKey }),
	language: "fr",
	setLanguage: (newLanguage: string) => set({ language: newLanguage }),
}));
