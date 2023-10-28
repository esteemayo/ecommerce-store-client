import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { CartModalStore } from '@/types';

const useCartModal = create<CartModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openCartModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeCartModal'),
  }))
);

export default useCartModal;
