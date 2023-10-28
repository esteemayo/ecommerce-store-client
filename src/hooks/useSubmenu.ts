import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { sublinks } from '@/data';
import { SubmenuStore } from '@/types';

export const useSubmenu = create<SubmenuStore>()(
  devtools((set) => ({
    isOpen: false,
    location: {},
    page: {
      page: '',
      links: [],
    },
    openSubmenu: (payload) =>
      set(
        () => ({
          page: sublinks.find((link) => link.page === payload.page),
          location: payload.coordinates,
          isOpen: true,
        }),
        false,
        'openSubmenu'
      ),
    closeSubmenu: () => set(() => ({ isOpen: false }), false, 'closeSubmenu'),
  }))
);
