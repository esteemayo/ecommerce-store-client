import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useSearchModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openSearchModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeSearchModal'),
  }))
);

export default useSearchModal;
