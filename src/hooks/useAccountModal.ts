import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AccountModalStore } from '@/types';

const useAccountModal = create<AccountModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openAccountModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeAccountModal'),
  }))
);

export default useAccountModal;
