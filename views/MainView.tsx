"use client";
import React from "react";
import BookTable from "@/components/BookTable";
import Tabs from "@/components/Tabs";
import AddBookModal from "@/components/modals/AddBookModal";
import DeleteBookModal from "@/components/modals/DeleteBookModal";
import { ToastContainer } from "react-toastify";
import useAlert from "@/hooks/useAlert";

const MainView = () => {
	const { handleAlert } = useAlert();

	return (
		<div className="w-full md:w-4/5">
			<ToastContainer
				position="bottom-right"
				icon="🚀"
				toastClassName="bg-purple-900 text-white"
				className="text-white"
			/>
			<AddBookModal onAlert={handleAlert} />
			<DeleteBookModal />
			<Tabs />
			<BookTable />
		</div>
	);
};

export default MainView;
