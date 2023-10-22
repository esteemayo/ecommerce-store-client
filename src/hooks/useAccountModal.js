import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useAccountModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openAccountModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeAccountModal'),
  }))
);

export default useAccountModal;
