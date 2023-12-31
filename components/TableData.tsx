import React from "react";
import moment from "moment";
import SkeletonLoader from "@/components/skeletons/TableLoader";
import { Book } from "@/components/BookTable";

type TableDataProps = {
	isLoading: boolean;
	books: Book[];
	onViewBook(bookId: number): void;
	onDeleteBook(bookId: number): void;
};

const TableData: React.FC<TableDataProps> = (props) => {
	const { isLoading, books, onViewBook, onDeleteBook } = props;

	if (isLoading) {
		return <SkeletonLoader />;
	}

	if (!books.length) {
		return (
			<tbody>
				<tr className="bg-white border-b">
					<td colSpan={5} className="px-6 py-4 text-center">
						No books available
					</td>
				</tr>
			</tbody>
		);
	}

	return (
		<tbody>
			{books.map((book: Book) => (
				<tr key={book.id} className="bg-white border-b">
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
						{book.title}
					</th>
					<td className="px-6 py-4">{book.author}</td>
					<td className="px-6 py-4">
						{moment(book.publishedDate).format("MMM DD, YYYY")}
					</td>
					<td className="px-6 py-4">
						<p className="text-xs bg-purple-900 text-white text-center p-1 rounded-lg font-medium tracking-wide">
							{book.genre}
						</p>
					</td>
					<td className="px-6 py-4 flex justify-center gap-x-5">
						<button
							onClick={() => onViewBook(book.id)}
							className="text-gray-500 hover:text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-5 h-5">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
								/>
							</svg>
						</button>
						<button
							onClick={() => onDeleteBook(book.id)}
							className="text-gray-500 hover:text-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-5 h-5">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableData;
