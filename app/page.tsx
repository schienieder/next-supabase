import React from "react";
import Navbar from "@/components/Navbar";
import MainView from "@/views/MainView";
// import supabase from "@/config/supabase";

export default function Home() {
	return (
		<div className="w-full min-h-screen bg-gray-100 font-mont">
			{/* TOP NAV */}
			<Navbar />
			{/* MAIN CONTENTS HERE */}
			<div className="w-full p-8 flex justify-center">
				<MainView />
			</div>
		</div>
	);
}
