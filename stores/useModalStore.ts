import { create } from "zustand";

type ModalStoreState = {
	isOpenAddModal: boolean;
	isOpenDeleteModal: boolean;
	onOpenAddModal(): void;
	onCloseAddModal(): void;
	onOpenDeleteModal(): void;
	onCloseDeleteModal(): void;
};

const useModalStore = create<ModalStoreState>((set) => ({
	isOpenAddModal: false,
	isOpenDeleteModal: false,
	onOpenAddModal: () => {
		set({ isOpenAddModal: true });
	},
	onCloseAddModal: () => {
		set({ isOpenAddModal: false });
	},
	onOpenDeleteModal: () => {
		set({ isOpenDeleteModal: true });
	},
	onCloseDeleteModal: () => {
		set({ isOpenDeleteModal: false });
	},
}));

export default useModalStore;
