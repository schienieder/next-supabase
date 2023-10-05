import React from "react";
import Modal from "@/components/Modal";
import useModalStore from "@/stores/useModalStore";

const AddBookModal = () => {
	const { onCloseAddModal } = useModalStore((state) => state);

	return (
		<Modal>
			<h3 className="text-lg leading-6 text-gray-900 font-semibold">
				New Book
			</h3>
			<div className="mt-2">
				<p className="text-sm text-gray-500">
					Fill all details below to create a new book
				</p>
			</div>

			<form className="mt-5">
				<div className="mb-6">
					<label
						htmlFor="title"
						className="block mb-2 text-sm font-medium text-gray-900">
						Title
					</label>
					<input
						type="text"
						id="title"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						placeholder="Title"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="author"
						className="block mb-2 text-sm font-medium text-gray-900">
						Author
					</label>
					<input
						type="text"
						id="author"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						placeholder="Author"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="publishedDate"
						className="block mb-2 text-sm font-medium text-gray-900">
						Published Date
					</label>
					<input
						type="date"
						id="publishedDate"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="genre"
						className="block mb-2 text-sm font-medium text-gray-900">
						Genre
					</label>
					<input
						type="text"
						id="genre"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						placeholder="Genre"
						required
					/>
				</div>

				<button
					type="button"
					onClick={onCloseAddModal}
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
					Submit
				</button>
			</form>
		</Modal>
	);
};

export default AddBookModal;
