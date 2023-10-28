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
  size: string;
  price: number;
  inCart: boolean;
  quantity: number;
};

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
  calcTotal(): void;
}
