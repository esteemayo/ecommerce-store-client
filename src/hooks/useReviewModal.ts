import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { ReviewModalStore } from '@/types';

const useReviewModal = create<ReviewModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openReviewModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeReviewModal'),
  }))
);

export default useReviewModal;
