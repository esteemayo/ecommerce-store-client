import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { FileModalStore } from '@/types';

const useFileModal = create<FileModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openFileModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeFileModal'),
  }))
);

export default useFileModal;
