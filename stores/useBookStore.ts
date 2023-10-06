import { create } from "zustand";
import { Book } from "@/components/BookTable";
import supabase from "@/config/supabase";
import { PostgrestError } from "@supabase/supabase-js";

interface BookState {
	books: Book[];
	selectedBookData: Book;
	bookData: {
		title: string;
		author: string;
		publishedDate: Date;
		genre: string;
	};
	error: null | string;
	onChangeInput(name: string, value: string | number | Date): void;
	fetchBooks(): void;
	viewBook(bookId: number): void;
	createBook(): void;
	updateBook(bookId: number): void;
	deleteBook(bookId: number): void;
}

const useBookStore = create<BookState>((set, get) => ({
	books: [],
	selectedBookData: {
		id: 0,
		title: "",
		author: "",
		publishedDate: new Date(),
		genre: "",
		createdAt: new Date(),
	},
	bookData: {
		title: "",
		author: "",
		publishedDate: new Date(),
		genre: "",
	},
	error: null,
	onChangeInput: (name: string, value: string | number | Date) => {
		set({ bookData: { ...get().bookData, [name]: value } });
	},
	fetchBooks: async () => {
		try {
			const { data, error } = await supabase
				.from("books")
				.select()
				.order("created_at", { ascending: false });

			if (error) {
				set({ error: (error as PostgrestError).message, books: [] });
				console.log(error);
				return;
			}

			if (data === null) {
				set({ books: [] });
				return;
			}

			set({ books: data });
		} catch (e) {
			console.log("Error: ", (e as PostgrestError).message);
		}
	},
	viewBook: async (bookId: number) => {
		try {
			const { data, error } = await supabase
				.from("books")
				.select()
				.eq("id", bookId)
				.single();

			if (error) {
				set({ error: (error as PostgrestError).message });
			}

			if (!error && data) {
				set({ selectedBookData: data });
			}

			return get().selectedBookData;
		} catch (e) {
			console.log("Error: ", (e as PostgrestError).message);
		}
	},
	createBook: async () => {
		try {
			const { data, error } = await supabase
				.from("books")
				.insert([get().bookData]);

			if (error) {
				set({ error: (error as PostgrestError).message });
			}

			if (!error && data) {
				const previousBooks = get().books;
				set({ books: [...previousBooks, data] });
			}
		} catch (e) {
			console.log("Error: ", (e as PostgrestError).message);
		}
	},
	updateBook: async (bookId: number) => {
		try {
			const currentBook = get().bookData;

			const { data, error } = await supabase
				.from("books")
				.update({
					title: currentBook.title,
					author: currentBook.author,
					publishedDate: currentBook.publishedDate,
					genre: currentBook.genre,
				})
				.eq("id", bookId)
				.select()
				.single();

			if (error) {
				set({ error: (error as PostgrestError).message });
				return;
			}

			if (data === null) return;

			const updatedBooks = get().books.map((book: Book) => {
				if (book.id === bookId) {
					return {
						...book,
						title: currentBook.title,
						author: currentBook.author,
						publishedDate: currentBook.publishedDate,
						genre: currentBook.genre,
					};
				}
				return book;
			});

			set({ books: updatedBooks });
		} catch (e) {
			console.log("Error: ", (e as PostgrestError).message);
		}
	},
	deleteBook: async (bookId: number) => {
		try {
			const { error } = await supabase.from("books").delete().eq("id", bookId);

			if (error) {
				set({ error: (error as PostgrestError).message });
				return;
			}

			const filteredBooks = get().books.filter(
				(book: Book) => book.id !== bookId
			);
			set({ books: filteredBooks });
		} catch (e) {
			console.log("Error: ", (e as PostgrestError).message);
		}
	},
}));

export default useBookStore;
