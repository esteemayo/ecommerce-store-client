import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useSidebar = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openSidebar'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeSidebar'),
  }))
);
