"use client";
import React from "react";
import BookTable from "@/components/BookTable";
import Tabs from "@/components/Tabs";
import AddBookModal from "@/components/modals/AddBookModal";
import DeleteBookModal from "@/components/modals/DeleteBookModal";

const MainView = () => {
	return (
		<div className="w-full md:w-4/5">
			<AddBookModal />
			<DeleteBookModal />
			<Tabs />
			<BookTable />
		</div>
	);
};

export default MainView;
