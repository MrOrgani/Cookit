"use client";
import React from "react";

export const useTimedState = <T extends unknown>(
	initialState: T,
	timeout: number
) => {
	const [state, setState] = React.useState<T>(initialState);

	const lastUpdateTimeRef = React.useRef<number>(Date.now());

	React.useEffect(() => {
		if (Date.now() - lastUpdateTimeRef.current > timeout) {
			setState(initialState);
			lastUpdateTimeRef.current = Date.now();
			return;
		}

		const timeoutId = setTimeout(() => {
			setState(initialState);
			lastUpdateTimeRef.current = Date.now();
		}, timeout - (Date.now() - lastUpdateTimeRef.current));

		return () => {
			clearTimeout(timeoutId);
		};
	}, [initialState, timeout]);

	return state;
};
