import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useReviewModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openReviewModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeReviewModal'),
  }))
);

export default useReviewModal;
