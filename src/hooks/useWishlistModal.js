import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useWishlistModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }),false,'openWishlistModal'),
    onClose: () => set(()=>({ isOpen: false }),false,'closeWishlistModal'),
  }))
);

export default useWishlistModal;
