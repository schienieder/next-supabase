import React from "react";
import Modal from "@/components/Modal";
import useModalStore from "@/stores/useModalStore";

const AddBookModal = () => {
	const { onCloseAddModal } = useModalStore((state) => state);

	return (
		<Modal>
			<h3 className="text-lg font-medium leading-6 text-gray-900">
				Payment successful
			</h3>
			<div className="mt-2">
				<p className="text-sm text-gray-500">
					Your payment has been successfully submitted. We’ve sent you an email
					with all of the details of your order.
				</p>
			</div>

			<div className="mt-4">
				<button
					type="button"
					onClick={onCloseAddModal}
					className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
					Got it, thanks!
				</button>
			</div>
		</Modal>
	);
};

export default AddBookModal;
