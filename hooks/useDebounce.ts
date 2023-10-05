import { useEffect, useState } from "react";

const useDebounce = (value: string | number | Date) => {
	const [debouncedValue, setDebouncedValue] = useState<string | number | Date>(
		value
	);

	useEffect(() => {
		const debounceTimeOut = setTimeout(() => {
			setDebouncedValue(value);
		}, 500);

		return () => {
			clearTimeout(debounceTimeOut);
		};
	}, [value]);

	return debouncedValue;
};

export default useDebounce;
