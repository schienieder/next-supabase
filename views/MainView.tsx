"use client";
import React, { useState } from "react";
import BookTable from "@/components/BookTable";
import Tabs from "@/components/Tabs";
import AddBookModal from "@/components/AddBookModal";

const MainView = () => {
	return (
		<div className="w-full md:w-4/5">
			<AddBookModal />
			<Tabs />
			<BookTable />
		</div>
	);
};

export default MainView;
