import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

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

export type NavLink = {
  id: number;
  text: string;
}[];

type Link = {
  url?: string;
  icon?: IconDefinition;
  label?: string;
}[];

export type Sublink = {
  page: string;
  links: Link;
}[];

export type SliderItem = {
  id: number;
  url: string;
  img: string;
  title: string;
  desc: string;
}[];

type LinkFooter = {
  id: number;
  url: string;
  text: string;
};

export type FooterMenu = {
  title: string;
  links: LinkFooter[];
}[];

export type Social = {
  id: number;
  url: string;
  icon: IconType;
  color: string;
}[];

export type FooterLink = {
  id: number;
  url: string;
  text: string;
}[];

export type StoreProduct = {
  id: number;
  name: string;
  desc: string;
  price: number;
  priceDiscount: number;
  numberInStock: number;
  inStock: boolean;
  images: string[];
  featured: boolean;
  color: string[];
  size: string[];
  category: string;
  tags: string[];
  ratingsQuantity: number;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  slug: string;
  discount: number;
}[];

export type TopReview = {
  id: number;
  rating: number;
  review: string;
  user: {
    name: string;
    photo: string;
  };
}[];

export type ReviewItem = {
  id: number;
  user: {
    name: string;
    img?: string;
  };
  rating: number;
  review: string;
  createdAt: string;
  updatedAt: string;
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

export interface DarkModeStore {
  mode: boolean;
  toggle(): void;
}

export interface EmailModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface FileModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface PasswordModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface PaymentModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface ImageModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface ReviewModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface WishlistModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface AccountModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface WishlistProps {
  actionId: number;
  product: any;
  wished: CartItem;
}
