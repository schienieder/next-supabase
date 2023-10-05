import { create } from "zustand";
import { Book } from "@/components/BookTable";
import supabase from "@/config/supabase";
import { PostgrestError } from "@supabase/supabase-js";

interface BookState {
	books: Book[];
	addBookData: {
		title: string;
		author: string;
		publishedDate: Date;
		genre: string;
	};
	error: null | string;
	onChangeInput(name: string, value: string | number | Date): void;
	fetchBooks(): void;
	createBook(): void;
}

const useBookStore = create<BookState>((set, get) => ({
	books: [],
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
	createBook: async () => {
		const { data, error } = await supabase
			.from("books")
			.insert([get().addBookData]);

		if (error) {
			set({ error: (error as PostgrestError).message });
		}

		if (!error && data) {
			const oldBooksData = get().books;
			set({ books: [...oldBooksData, data] });
		}
	},
}));

export default useBookStore;
