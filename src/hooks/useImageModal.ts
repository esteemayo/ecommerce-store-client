import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useImageModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openImageModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeImageModal'),
  }))
);

export default useImageModal;
