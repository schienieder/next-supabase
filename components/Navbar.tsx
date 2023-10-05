"use-client";
import React from "react";

const Navbar = () => {
	return (
		<nav className="w-full px-10 py-5 bg-purple-900 text-white shadow-lg border-b border-gray-200 flex justify-between items-center">
			{/* LOGO PART */}
			<div className="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-8 h-8"
					viewBox="0 0 24 24">
					<path
						fill="white"
						d="M17.992 17.023L11.981 6.977L6.008 17.023h11.984Z"
					/>
				</svg>
				<h4 className="font-semibold text-xl">Next Supabase</h4>
			</div>
			{/* NAME PART */}
			<h4 className="text-xl">Justine Rhei Torres</h4>
		</nav>
	);
};

export default Navbar;
