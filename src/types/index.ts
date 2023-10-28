import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ClientOnlyProps {
  children: ReactNode;
}

export type CartItem = {
  id: number;
  name: string;
  images: string[];
  color: string;
  size: string | number;
  price: number;
  inCart: boolean;
  quantity: number;
}[];

export interface CartStore {
  cart: [];
  wishlist: [];
  wished: [];
  qty: number;
  tax: number;
  total: number;
  subtotal: number;
  reset(): void;
  addProduct(value: any): void;
  addWishlist(value: any): void;
  removeWishlist(id: number): void;
  clearCart(): void;
  remove(id: number): void;
  toggleQuantity(value: any): void;
  calcTotals(): void;
}

type Link = {
  url?: string;
  icon?: IconDefinition;
  label?: string;
}[];

export type Sublink = {
  page: string;
  links: Link;
}[];

export interface SubmenuStore {
  isOpen: boolean;
  location: {
    center?: number;
    bottom?: number;
  };
  page: {
    page: string;
    links: Link;
  };
  openSubmenu(value: any): void;
  closeSubmenu(): void;
}

export interface SidebarStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface SearchModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface CountryValues {
  flag: string;
  label: string;
}
