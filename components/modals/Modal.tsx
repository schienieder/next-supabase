import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type ModalProps = {
	modalTitle: string;
	modalDescription: string;
	isOpen: boolean;
	onCloseModal(): void;
	children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = (props) => {
	const { modalTitle, modalDescription, isOpen, onCloseModal, children } =
		props;

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={onCloseModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto font-mont">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<div className="flex justify-between">
									<h3 className="text-lg leading-6 text-gray-900 font-semibold capitalize">
										{modalTitle}
									</h3>
									<button
										onClick={onCloseModal}
										className="text-neutral-500 bg-neutral-100 hover:bg-neutral-200 p-1 rounded-lg focus:outline-none">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-5 h-5">
											<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
										</svg>
									</button>
								</div>
								<div className="mt-2">
									<p className="text-sm text-gray-500">{modalDescription}</p>
								</div>
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;
