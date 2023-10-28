import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { PaymentModalStore } from '@/types';

const usePaymentModal = create<PaymentModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openPaymentModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closePaymentModal'),
  }))
);

export default usePaymentModal;
