import React from "react";

const SkeletonLoader: React.FC = () => {
	const skeletonArr = Array.from({ length: 5 });

	return (
		<tbody>
			{skeletonArr.map((_, index: number) => (
				<tr key={index}>
					{skeletonArr.map((_, index: number) => (
						<td key={index} className="animate-pulse px-5">
							<div className="py-3 px-5 min-w-fit bg-slate-200 rounded-full"></div>
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default SkeletonLoader;
