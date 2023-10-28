import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { SidebarStore } from '@/types';

export const useSidebar = create<SidebarStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openSidebar'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeSidebar'),
  }))
);
