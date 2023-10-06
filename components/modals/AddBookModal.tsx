import React from "react";
import Modal from "@/components/modals/Modal";
import useModalStore from "@/stores/useModalStore";
import InputField from "@/components/InputField";
import useBookStore from "@/stores/useBookStore";

interface AddBookModalProps {
	onAlert(message: string): void;
}

const AddBookModal: React.FC<AddBookModalProps> = (props) => {
	const { onAlert } = props;
	const { isOpenAddModal, onCloseAddModal } = useModalStore((state) => state);
	const { onChangeInput, createBook } = useBookStore((state) => state);

	const onChangeInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		onChangeInput(name, value);
	};

	const onSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		createBook();
		onCloseAddModal();

		onAlert("Book created, please wait a bit.");
	};

	return (
		<Modal
			modalTitle="New Book"
			modalDescription="Fill all details below to create a new book"
			isOpen={isOpenAddModal}
			onCloseModal={onCloseAddModal}>
			<form className="mt-5" onSubmit={onSubmitForm}>
				<InputField
					label="title"
					id="title"
					inputType="text"
					onChange={onChangeInputField}
					isRequired
				/>
				<InputField
					label="author"
					id="author"
					inputType="text"
					onChange={onChangeInputField}
					isRequired
				/>
				<InputField
					label="published date"
					id="publishedDate"
					inputType="date"
					onChange={onChangeInputField}
					isRequired
				/>
				<InputField
					label="genre"
					id="genre"
					inputType="text"
					onChange={onChangeInputField}
					isRequired
				/>

				<button
					type="submit"
					className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg focus:outline-none text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Submit
				</button>
			</form>
		</Modal>
	);
};

export default AddBookModal;
