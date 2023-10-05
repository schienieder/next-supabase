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
			<MainView />
			{/* <div className="w-full flex justify-center p-8">
				<MainView />
			</div> */}
		</div>
	);
}
