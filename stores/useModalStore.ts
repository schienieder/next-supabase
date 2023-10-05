import { create } from "zustand";

type ModalStoreState = {
	isOpenAddModal: boolean;
	onOpenAddModal(): void;
	onCloseAddModal(): void;
};

const useModalStore = create<ModalStoreState>((set) => ({
	isOpenAddModal: false,
	onOpenAddModal: () => {
		set({ isOpenAddModal: true });
	},
	onCloseAddModal: () => {
		set({ isOpenAddModal: false });
	},
}));

export default useModalStore;
