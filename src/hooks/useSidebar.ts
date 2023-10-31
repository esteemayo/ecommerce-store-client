import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

import { SidebarStore } from '@/types';

export const useSidebar = create<SidebarStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openSidebar'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeSidebar'
      ),
  }))
);
