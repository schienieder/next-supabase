"use client";
import BookView from "@/views/BookView";
import { useParams } from "next/navigation";
import React from "react";

export default function Edit() {
	const params = useParams();
	const bookId = Number(params.id);

	return <BookView bookId={bookId} />;
}
