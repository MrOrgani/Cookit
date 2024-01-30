import { create } from "zustand";

interface IStreamResponse {
	htmlCode: string;
	setHtmlCode: (newChunck: string) => void;
	removeHtmlCode: () => void;
	isStreaming: boolean;
	setIsStreaming: (isStreaming: boolean) => void;
}

export const useStreamResponse = create<IStreamResponse>((set) => ({
	htmlCode: "",
	setHtmlCode: (newChunck: string) =>
		set((state: { htmlCode: string }) => ({
			htmlCode: state.htmlCode + newChunck,
		})),
	removeHtmlCode: () => set({ htmlCode: "" }),
	isStreaming: false,
	setIsStreaming: (isStreaming: boolean) => set({ isStreaming }),
}));
