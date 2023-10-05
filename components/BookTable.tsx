import React from "react";
import { useQuery } from "react-query";
import TableData from "@/components/TableData";
import useBookStore from "@/stores/useBookStore";

export type Book = {
	id: number;
	title: string;
	author: string;
	publishedDate: Date;
	genre: string;
	createdAt: Date;
};

const tableHeaders = ["title", "author", "published date", "genre", "actions"];

const BookTable = () => {
	const { fetchBooks, books, error } = useBookStore((state) => state);

	const { isLoading } = useQuery("books", fetchBooks);

	return (
		<div className="w-full bg-white shadow border-b border-gray-200 rounded-2xl mt-10 p-5">
			<h4 className="text-xl font-semibold text-gray-800 mb-3">Books Table</h4>
			{error && (
				<div className="w-full bg-rose-200 text-rose-600 mb-3 p-3 rounded-2xl font-semibold text-center">
					{error}
				</div>
			)}
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
					<TableData isLoading={isLoading} books={books} />
				</table>
			</div>
		</div>
	);
};

export default BookTable;
