import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useCartModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(()=>({ isOpen: true }),false,'openCartModal'),
    onClose: () => set(()=> ({ isOpen: false }),false,'closeCartModal'),
  }))
);

export default useCartModal;
