import React from "react";
import { useQuery } from "react-query";
import TableData from "@/components/TableData";
import useBookStore from "@/stores/useBookStore";
import useModalStore from "@/stores/useModalStore";
import { useRouter } from "next/navigation";

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
	const { fetchBooks, viewBook, books, error } = useBookStore((state) => state);
	const router = useRouter();

	const { onOpenDeleteModal } = useModalStore((state) => state);

	const { isLoading } = useQuery("books", fetchBooks);

	const handleViewBook = (bookId: number) => {
		router.push(`/${bookId}`);
	};

	const handleDeleteBook = (bookId: number) => {
		viewBook(bookId);
		onOpenDeleteModal();
	};

	return (
		<div className="w-full bg-white shadow border-b border-gray-200 rounded-2xl mt-10 p-5">
			<h4 className="text-xl font-semibold text-gray-800 mb-3">Books Table</h4>
			{error && (
				<div className="w-full bg-rose-200 text-rose-600 mb-3 p-3 rounded-2xl text-sm font-semibold text-center">
					{error}
				</div>
			)}
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-neutral-100">
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
					<TableData
						isLoading={isLoading}
						books={books}
						onViewBook={(bookId: number) => handleViewBook(bookId)}
						onDeleteBook={(bookId: number) => handleDeleteBook(bookId)}
					/>
				</table>
			</div>
		</div>
	);
};

export default BookTable;
