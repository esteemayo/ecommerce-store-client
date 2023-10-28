import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const usePaymentModal = create(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openPaymentModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closePaymentModal'),
  }))
);

export default usePaymentModal;
