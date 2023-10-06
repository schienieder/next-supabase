import React from "react";
import Modal from "@/components/modals/Modal";
import useModalStore from "@/stores/useModalStore";
import useBookStore from "@/stores/useBookStore";

const DeleteBookModal = () => {
	const { isOpenDeleteModal, onCloseDeleteModal } = useModalStore(
		(state) => state
	);
	const { selectedBookData, deleteBook } = useBookStore((state) => state);

	const onSubmitButton = (e: React.FormEvent) => {
		e.preventDefault();
		deleteBook(selectedBookData.id);
		onCloseDeleteModal();
	};

	return (
		<Modal
			modalTitle="Remove Book"
			modalDescription="Remove a book in your collection"
			isOpen={isOpenDeleteModal}
			onCloseModal={onCloseDeleteModal}>
			<h4 className="text-base my-6">
				Do you want to delete book{" "}
				<span className="capitalize font-semibold">
					{selectedBookData.title}
				</span>
				?
			</h4>
			<button
				type="button"
				className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg focus:outline-none text-sm w-full sm:w-auto px-5 py-2.5 text-center"
				onClick={onSubmitButton}>
				Confirm
			</button>
		</Modal>
	);
};

export default DeleteBookModal;
