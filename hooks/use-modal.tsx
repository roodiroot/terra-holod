import { create } from "zustand";

interface ModalOpenState {
  isOpen: boolean;
  params: { title: string; description: string };
  onOpen: (params?: { title: string; description: string }) => void;
  onClose: () => void;
}

const useModal = create<ModalOpenState>((set) => ({
  isOpen: false,
  params: { title: "", description: "" },
  onOpen: (params) => {
    if (params?.title && params?.description) {
      set({ isOpen: true, params });
    }
    set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false, params: { title: "", description: "" } }),
}));

export default useModal;
