import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ImageModalStore } from '@/types';

const useImageModal = create<ImageModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openImageModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeImageModal'),
  }))
);

export default useImageModal;
