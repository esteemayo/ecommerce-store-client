import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useEmailModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openEmailModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeEmailModal'),
  }))
);

export default useEmailModal;
