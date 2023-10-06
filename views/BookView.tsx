import InputField from "@/components/InputField";
import useBookStore from "@/stores/useBookStore";
import moment from "moment";
import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import SkeletonLoader from "@/components/skeletons/FormLoader";

interface BookViewProps {
	bookId: number;
}

const BookView: React.FC<BookViewProps> = (props) => {
	const { bookId } = props;

	const { selectedBookData, onChangeInput, viewBook, updateBook } =
		useBookStore((state) => state);
	const router = useRouter();

	const onChangeInputField: (e: React.ChangeEvent<HTMLInputElement>) => void = (
		e
	) => {
		const { name, value } = e.target;
		onChangeInput(name, value);
	};

	const fetchBook = () => {
		viewBook(bookId);
	};

	const { isLoading } = useQuery("fetchBook", fetchBook);

	if (isLoading) {
		return <SkeletonLoader />;
	}

	const onSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();
		updateBook(bookId);
		router.push("/");
	};

	return (
		<div className="w-full md:max-w-lg">
			<div className="w-full bg-white shadow border-b border-gray-200 rounded-2xl mt-10 p-5">
				<div className="flex justify-between items-center mt-3">
					<h4 className="text-sm md:text-xl font-semibold">Selected Book</h4>
					<button
						type="button"
						onClick={() => router.back()}
						className="text-blue-600 flex gap-x-1 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
								clipRule="evenodd"
							/>
						</svg>

						<p className="text-sm md:text-base">Back</p>
					</button>
				</div>
				{/* FORM HERE */}
				<form className="mt-5" onSubmit={onSubmitForm}>
					<InputField
						label="title"
						id="title"
						inputType="text"
						onChange={onChangeInputField}
						isRequired
						defaultValue={selectedBookData.title}
					/>
					<InputField
						label="author"
						id="author"
						inputType="text"
						onChange={onChangeInputField}
						isRequired
						defaultValue={selectedBookData.author}
					/>
					<InputField
						label="published date"
						id="publishedDate"
						inputType="date"
						onChange={onChangeInputField}
						defaultValue={moment(selectedBookData.publishedDate).format(
							"YYYY-MM-DD"
						)}
						isRequired
					/>
					<InputField
						label="genre"
						id="genre"
						inputType="text"
						onChange={onChangeInputField}
						isRequired
						defaultValue={selectedBookData.genre}
					/>

					<button
						type="submit"
						className="text-white bg-purple-900 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg focus:outline-none text-sm w-full sm:w-auto px-5 py-2.5 text-center">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookView;
