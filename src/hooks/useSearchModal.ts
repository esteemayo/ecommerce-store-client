import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { SearchModalStore } from '@/types';

const useSearchModal = create<SearchModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openSearchModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeSearchModal'),
  }))
);

export default useSearchModal;
