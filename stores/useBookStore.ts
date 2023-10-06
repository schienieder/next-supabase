import { create } from "zustand";
import { Book } from "@/components/BookTable";
import supabase from "@/config/supabase";
import { PostgrestError } from "@supabase/supabase-js";

interface BookState {
	books: Book[];
	bookData: Book;
	addBookData: {
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
	deleteBook(bookId: number): void;
}

const useBookStore = create<BookState>((set, get) => ({
	books: [],
	bookData: {
		id: 0,
		title: "",
		author: "",
		publishedDate: new Date(),
		genre: "",
		createdAt: new Date(),
	},
	addBookData: {
		title: "",
		author: "",
		publishedDate: new Date(),
		genre: "",
	},
	error: null,
	onChangeInput: (name: string, value: string | number | Date) => {
		set({ addBookData: { ...get().addBookData, [name]: value } });
	},
	fetchBooks: async () => {
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
	},
	viewBook: async (bookId: number) => {
		const { data, error } = await supabase
			.from("books")
			.select()
			.eq("id", bookId)
			.single();

		if (error) {
			set({ error: (error as PostgrestError).message });
		}

		if (!error && data) {
			set({ bookData: data });
		}
	},
	createBook: async () => {
		const { data, error } = await supabase
			.from("books")
			.insert([get().addBookData]);

		if (error) {
			set({ error: (error as PostgrestError).message });
		}

		if (!error && data) {
			const previousBooks = get().books;
			set({ books: [...previousBooks, data] });
		}
	},
	deleteBook: async (bookId: number) => {
		const { error } = await supabase.from("books").delete().eq("id", bookId);

		if (error) {
			set({ error: (error as PostgrestError).message });
			return;
		}

		const filteredBooks = get().books.filter(
			(book: Book) => book.id !== bookId
		);
		set({ books: filteredBooks });
	},
}));

export default useBookStore;
