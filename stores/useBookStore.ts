import { create } from "zustand";
import { Book } from "@/components/BookTable";
import supabase from "@/config/supabase";
import { PostgrestError } from "@supabase/supabase-js";

interface BookState {
	books: Book[];
	isLoading: boolean;
	error: null | string;
	fetchBooks(): void;
}

const useBookStore = create<BookState>((set) => ({
	books: [],
	isLoading: false,
	error: null,
	fetchBooks: async () => {
		const { data, error } = await supabase.from("books").select();

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
}));

export default useBookStore;
