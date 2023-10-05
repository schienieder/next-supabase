import React, { useState } from "react";
import { useQuery } from "react-query";
import supabase from "@/config/supabase";
import moment from "moment";

type Book = {
	id: number;
	title: string;
	author: string;
	publishedDate: Date;
	genre: string;
	createdAt: Date;
};

const tableHeaders = ["title", "author", "published date", "genre", "actions"];

const BookTable = () => {
	const [books, setBooks] = useState<Book[]>([]);

	const fetchBooks = async (): Promise<Book[]> => {
		const { data } = await supabase.from("books").select();

		if (data === null) {
			return [];
		}

		return data;
	};

	const { data, isLoading } = useQuery<Book[]>("books", fetchBooks);

	return (
		<div className="w-full bg-white shadow border-b border-gray-200 rounded-2xl mt-10 p-5">
			<h4 className="text-xl font-semibold text-gray-800 mb-3">Books Table</h4>
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							{tableHeaders.map((header: string, index: number) => {
								return (
									<th
										key={`${header}-${index}`}
										scope="col"
										className={`px-6 py-3 ${
											header === "actions" ? "text-center" : ""
										}`}>
										{header}
									</th>
								);
							})}
						</tr>
					</thead>
					<TableData isLoading={isLoading} books={data!} />
				</table>
			</div>
		</div>
	);
};

const SkeletonLoader: React.FC = () => {
	const skeletonArr = Array.from({ length: 5 });

	return (
		<tbody>
			{skeletonArr.map((_, index: number) => (
				<tr key={index}>
					{skeletonArr.map((_, index: number) => (
						<td key={index} className="animate-pulse px-5">
							<div className="py-3 px-5 min-w-fit bg-slate-200 rounded-full"></div>
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

type TableDataProps = {
	isLoading: boolean;
	books: Book[];
};

const TableData: React.FC<TableDataProps> = (props) => {
	const { isLoading, books } = props;

	if (isLoading) {
		return <SkeletonLoader />;
	}

	if (!books.length) {
		return (
			<tbody>
				<tr>
					<td colSpan={5}>No books available</td>
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
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
						{book.title}
					</th>
					<td className="px-6 py-4">{book.author}</td>
					<td className="px-6 py-4">
						{moment(book.publishedDate).format("MMM DD, YYYY")}
					</td>
					<td className="px-6 py-4">{book.genre}</td>
					<td className="px-6 py-4 flex justify-center gap-x-5">
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
								d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
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
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default BookTable;
