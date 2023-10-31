import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

import { EmailModalStore } from '@/types';

const useEmailModal = create<EmailModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openEmailModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeEmailModal'
      ),
  }))
);

export default useEmailModal;
