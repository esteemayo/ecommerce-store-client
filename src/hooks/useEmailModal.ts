import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { EmailModalStore } from '@/types';

const useEmailModal = create<EmailModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openEmailModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeEmailModal'),
  }))
);

export default useEmailModal;
