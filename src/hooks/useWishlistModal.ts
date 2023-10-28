import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { WishlistModalStore } from '@/types';

const useWishlistModal = create<WishlistModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openWishlistModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeWishlistModal'),
  }))
);

export default useWishlistModal;
