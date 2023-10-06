import { toast } from "react-toastify";

const useAlert = () => {
	const handleAlert = (message: string) => {
		toast(message);
	};

	return {
		handleAlert,
	};
};

export default useAlert;
