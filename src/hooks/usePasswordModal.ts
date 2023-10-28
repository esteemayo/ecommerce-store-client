import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { PasswordModalStore } from '@/types';

const usePasswordModal = create<PasswordModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openPasswordModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closePasswordModal'),
  }))
);

export default usePasswordModal;
