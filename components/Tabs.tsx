import useModalStore from "@/stores/useModalStore";
import React, { useState } from "react";

const listItems = ["first", "second", "third"];
const styles = {
	listItem:
		"block border-x-0 border-b-2 border-t-0 px-4 md:px-7 pb-3.5 pt-4 text-xs uppercase leading-tight hover:isolate focus:isolate transition-colors ease-linear duration-300",
	activeItem:
		"border-purple-900 text-purple-900 font-bold hover:cursor-default",
	nonActiveItem:
		"border-transparent text-neutral-500 font-medium hover:bg-neutral-200 hover:cursor-pointer",
	button:
		"flex justify-center items-center gap-x-0 md:gap-x-1 rounded-2xl bg-purple-900 px-3 md:px-5 pb-2.5 pt-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:brightness-90 focus:outline-none focus:ring-0",
};

const Tabs = () => {
	const [isActive, setIsActive] = useState<string>(listItems[0]);
	const { onOpenAddModal } = useModalStore((state) => state);

	const changeActiveItem = (item: string) => {
		if (isActive === item) return;
		console.log("Item: ", item);
		setIsActive(item);
	};

	return (
		<div className="flex justify-between items-center border-b border-gray-300">
			{/* TAB ITEMS */}
			<ul className="flex list-none flex-row flex-wrap" role="tablist">
				{listItems.map((item: string, index: number) => {
					return (
						<li
							key={`${item}-${index}`}
							role="presentation"
							className={`${styles.listItem} ${
								isActive === item ? styles.activeItem : styles.nonActiveItem
							}`}
							onClick={() => changeActiveItem(item)}>
							<p>{item}</p>
						</li>
					);
				})}
			</ul>
			{/* ADD BUTTON */}
			<button type="button" className={styles.button} onClick={onOpenAddModal}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-5 h-5">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 6v12m6-6H6"
					/>
				</svg>
				<p className="hidden md:block text-xs">New Book</p>
			</button>
		</div>
	);
};

export default Tabs;
