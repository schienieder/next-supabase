import React from "react";

type InputFieldProps = {
	label: string;
	id: string;
	inputType: string;
	isRequired: boolean;
	onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputField: React.FC<InputFieldProps> = (props) => {
	const { label, id, inputType, isRequired, onChange } = props;

	return (
		<div className="mb-6">
			<label
				htmlFor={label}
				className="block mb-2 text-sm font-medium text-gray-900 capitalize">
				{label}
			</label>
			<input
				type={inputType}
				id={id}
				name={id}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg placeholder:capitalize focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
				placeholder={label}
				required={isRequired}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputField;
