import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {closeSidebar,  openSidebar } from '@/features/submenu/submenuSlice';

export const useSidebar = () => {
  const dispatch = useDispatch();

  return (
    <div>useSidebar</div>
  );
}
