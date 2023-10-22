import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = (set) => ({
  mode: false,
  toggle: () => set((state) => ({ mode: !state.mode }), false, 'toggleMode'),
});

export const useDarkMode = create(persist(devtools(store), 'darkMode'));
