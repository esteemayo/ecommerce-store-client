import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const usePasswordModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openPasswordModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closePasswordModal'),
  }))
);

export default usePasswordModal;
