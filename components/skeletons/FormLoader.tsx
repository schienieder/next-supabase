import React from "react";

const FormLoading = () => {
	return (
		<div className="w-full md:w-4/5 md:max-w-lg p-8 bg-white rounded-2xl">
			<div className="flex flex-col gap-y-6">
				{Array.from({ length: 5 }).map((_, index: number) => (
					<div className="flex flex-col gap-y-2" key={index}>
						<div className="py-2 px-10 w-10 bg-slate-200 rounded-full"></div>
						<div className="py-5 min-w-fit bg-slate-200 rounded-full"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FormLoading;
