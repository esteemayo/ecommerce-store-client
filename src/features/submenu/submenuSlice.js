import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  location: {},
  page: {
    page: '',
    links: [],
  },
};

export const subMenuSlice = createSlice({
  name: 'submenu',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    openSubmenu: (state, { payload }) => {
      console.log('payload', payload);
      state.isSubmenuOpen = true;
    },
    closeSubmenu: (state) => {
      state.isSubmenuOpen = false;
    },
  },
});

export const { closeSidebar, closeSubmenu, openSidebar, openSubmenu } = subMenuSlice.actions;

export default subMenuSlice.reducer;
