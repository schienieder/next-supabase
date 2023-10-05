"use client";
import React from "react";
import BookTable from "@/components/BookTable";
import Tabs from "@/components/Tabs";

const MainView = () => {
	return (
		<div className="w-full p-8">
			<Tabs />
			{/* BOOKS TABLE */}
			<BookTable />
		</div>
	);
};

export default MainView;
