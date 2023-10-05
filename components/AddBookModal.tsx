import React, { useState } from "react";
import Modal from "@/components/Modal";
import useModalStore from "@/stores/useModalStore";
import InputField from "@/components/InputField";
import useBookStore from "@/stores/useBookStore";

const AddBookModal = () => {
	const { onCloseAddModal } = useModalStore((state) => state);
	const { onChangeInput, createBook } = useBookStore((state) => state);

	const onChangeInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		onChangeInput(name, value);
	};

	const onSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		createBook();
		onCloseAddModal();
	};

	return (
		<Modal>
			<div className="flex justify-between">
				<h3 className="text-lg leading-6 text-gray-900 font-semibold">
					New Book
				</h3>
				<button
					onClick={onCloseAddModal}
					className="text-neutral-500 bg-neutral-100 hover:bg-neutral-200 p-1 rounded-lg focus:outline-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5">
						<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
					</svg>
				</button>
			</div>
			<div className="mt-2">
				<p className="text-sm text-gray-500">
					Fill all details below to create a new book
				</p>
			</div>

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
