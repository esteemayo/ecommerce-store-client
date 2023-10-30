import { IconType } from 'react-icons/lib';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HTMLAttributes, HtmlHTMLAttributes, SetStateAction } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ClientOnlyProps {
  children: React.ReactNode;
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
  wishlists: [];
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

export type WishlistItem = {
  id: number;
  name: string;
  desc: string;
  price: number;
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
}[];

export type OrderItem = {
  id: number;
  customer: string;
  address: string;
  total: number;
  status: number;
  paymentMethod: number;
  user: string;
  createdAt: string;
  updatedAt: string;
}[];

export type Recommendation = {
  id: number;
  image: string;
  name: string;
  price: number;
}[];

export type ProductValue = {
  id: number;
  desc: string;
  img: string;
}[];

export type PriceOption = {
  value: string;
  text: string;
}[];

export type RegisterInput = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}[];

export type PasswordInput = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}[];

export type UserDataInput = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}[];

export type SelectInput = {
  id: string;
  name: string;
  label: string;
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

export type CountryValues = {
  flag: string;
  label: string;
}[];

export interface CountrySelectProps extends HTMLAttributes<HTMLSelectElement> {
  data: CountryValues;
  name: string;
  label: string;
  error?: string;
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

export interface CartModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export interface WishlistProps {
  actionId: number;
  product: any;
  wished: CartItem;
}

export interface MenuItemProps {
  label: string;
  onMouse(e: React.MouseEvent<HTMLButtonElement>): void;
}

export interface LoginButtonProps {
  isHover: boolean;
  onMouseOver(): void;
  onMouseLeave(): void;
}

export interface CartQuantityProps {
  amount: number;
}

export interface SearchIconProps {
  onOpen(): void;
}

export interface ToggleButtonProps {
  icon: IconDefinition;
  onClick(): void;
}

export interface HeaderProps {
  title: string;
}

type Product = {
  id: number;
  images: string[];
  price: number;
  discount: number;
  ratingsQuantity: number;
  ratingsAverage: number;
};

export interface ProductCardProps {
  product: Product;
  onOpen(): void;
  onSelect(value: any): void;
}

interface CardProduct {
  id: number;
  name: string;
  images: string[];
  price: number;
  discount: number;
  ratingsQuantity: number;
  ratingsAverage: number;
  inStock: boolean;
}

export interface CardInfoProps {
  url: string;
  product: CardProduct;
  initialPrice: number;
  priceLabel: number;
  reviewLabel: string;
  wished: [];
  onOpen(): void;
}

export interface CardHeadingProps {
  url: string;
  name: string;
}

export interface CardReviewProps {
  reviewLabel: string;
  ratingsAverage: number;
  ratingsQuantity: number;
}

export interface CardPriceProps {
  inStock: boolean;
  initialPrice: number;
  priceLabel: number;
}

export interface CardButtonProps {
  onClick(): void;
}

export interface CardButtonsProps {
  product: CardProduct;
  productId: number;
  wished: [];
}

export interface WishlistButtonProps {
  actionId: number;
  product: CardProduct;
  wished: [];
}

type CartModalValues = {
  name?: string;
  images?: string[];
  price?: number;
  discount?: number;
  priceDiscount?: number;
  color?: string[];
  size?: string[];
};

export interface CartModalProps {
  product: CartModalValues;
  isOpen: boolean;
  onClose(): void;
  onSelect(value: any): void;
}

export interface ReviewItemProps {
  rating: number;
  review: string;
  user: {
    name: string;
    photo: string;
  };
}

export interface FooterMenuItemsProps {
  data: FooterMenu;
}

export interface FooterMenuItemProps {
  data: FooterLink;
}

export interface FooterHeadingProps {
  title: string;
  small?: boolean;
}

export interface SocialIconProps {
  data: Social;
}

export interface FooterLinkProps {
  data: FooterLink;
}

export interface FooterTextProps {
  value: number;
}

type ProductValues = {
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
  discount: number;
};

export interface ProductProps {
  product: ProductValues;
}

export interface ProductImageProps {
  images: string[];
}

export interface ProductImageModalProps {
  images: string[];
  isOpen: boolean;
  isMoved: boolean;
  slideIndex: number;
  lastIndex: number;
  onMove(direction: string): void;
  onClose(): void;
}

export interface BreadCrumbsProps {
  category: string;
}

export interface ProductHeadProps {
  name: string;
  price: number;
  modal?: boolean;
  discount: number;
  priceDiscount: number;
  ratingsAverage: number;
  ratingsQuantity: number;
}

export interface ColorSelectProps {
  title: string;
  mode?: boolean;
  value: string[];
  modal?: boolean;
  selected?: string | null;
  onAction(value: string): void;
  secondaryAction(selected: string): void;
}

export interface SizeSelectProps {
  value: (string | number)[];
  title: string;
  modal?: boolean;
  selected?: string | null;
  onAction(value: string | number): void;
  secondaryAction(selected: string | number): void;
}

export interface CounterProps {
  value: number;
  title: string;
  modal?: boolean;
  onClick(value: number): void;
}

export interface ProductButtonProps {
  small?: boolean;
  actionLabel: string;
  onAction(): void;
}

export interface AlertProps {
  alert: boolean;
  center?: boolean;
  message: string;
  onChange(alert: boolean): void;
}

export interface ProductValueProps {
  items: ProductValue;
  mode: string;
}

export interface ProductInfoProps {
  title: string;
  content: string;
}

export interface RecommendationProps {
  data: Recommendation;
}

export interface RecommendationItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ReviewsProps {
  reviews: ReviewItem;
  sortLabel: 'newest' | 'highest rating' | 'lowest rating';
  sort: string | null;
  onSort(sort: string | null): void;
}

export interface ReviewHeadProps {
  sort: string | null;
  sortLabel: string;
  rating: number;
  reviews: ReviewItem;
  isOpen: boolean;
  onOpen(): void;
  onSort(sort: string | null): void;
  onToggle(): void;
}

export interface ReviewCardsProps {
  rating: number;
  reviews: ReviewItem;
  onOpen(): void;
}

export interface ReviewCardProps {
  id: number;
  user: {
    name: string;
    img?: string;
  };
  rating: number;
  review: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewModalProps {
  isOpen: boolean;
  onClose(): void;
}

export interface CartItemProps {
  id: number;
  name: string;
  size: string | number;
  color: string;
  images: string[];
  price: number;
  quantity: number;
}

export interface CartInfoProps {
  id: number;
  color: string;
  name: string;
  images: string[];
  price: number;
  size: string | number;
  onAction(id: number): void;
}

export interface CartCounterProps {
  value: number;
  onIncrement(type: string): void;
  onDecrement(type: string): void;
}

export interface CartTotalProps {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  onAction(): void;
}

export interface PaymentModalProps {
  isOpen: boolean;
  onClose(): void;
  onExit(): void;
}

export interface FilterHeading {
  title: string;
}

export interface ProductFilterProps {
  products: StoreProduct;
  price: number;
  category: string;
  size: string | number;
  color: string;
  minPrice: number;
  maxPrice: number;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export interface ProductListProps {
  products: StoreProduct;
  title?: string;
}

export interface EmptyProductProps {
  src: string;
  title: string;
}

export interface FilterSelect
  extends HTMLAttributes<HTMLSelectElement | HTMLInputElement> {
  name: string;
  value?: any;
  page?: string;
  label: string;
  options: any[];
}

export interface OptionProps {
  value: any;
}

export interface SelectPriceProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: PriceOption;
}

export interface RangeInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  price: number;
}

export interface OrderCardProps {
  id: number;
  total: number;
  status: number;
  createdAt: string;
}

export interface OrderStatusProps {
  statusClass(index: number): string;
}

export type DateOptions = {
  day: 'numeric';
  month: 'long';
  year: 'numeric';
};

export interface DateTimeProps {
  date: Date;
  type?: string;
  options: DateOptions;
}

export interface WishlistCardProps {
  isOpen: boolean;
  onOpen(id: number): void;
  selected: any;
  wishlists: WishlistItem[];
  onAction(wishlist: SetStateAction<{}>): void;
  onClose(): void;
  onDelete(id: number): void;
}

export interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  label: string;
  value: string | any;
  error?: string;
  login?: boolean;
}

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  value: string | any;
  error: string;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  data: SelectInput;
  name: string;
  label: string;
  value: any;
  error: string;
  defaultText: string;
}

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export interface FormUploadProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  accept: string;
}

export interface FormButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
}

export interface FormProps {
  type?: string;
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface FormHeadingProps {
  small: boolean;
  type?: string;
  title: string;
}

export interface UploadProgressProps {
  type?: boolean;
  percentage: number;
}

export interface FormBoxProps {
  children: React.ReactNode;
}

export interface FormInfoProps {
  url: string;
  text: string;
  label: string;
}

export interface FormErrorProps {
  message?: string;
}

export interface CartInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  error?: string;
}

export interface AccountHeadProps {
  onOpen(): void;
  onAction(): void;
}

export interface DeactivateAccountProps {
  onOpen(): void;
}

export interface AccountUploadProps {
  onOpen(): void;
  currentUser: boolean;
}

export interface AccountInputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  error?: string;
}

export interface AccountEmailProps {
  email: string;
}

export interface AccountButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

export interface CancelButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick(): void;
}

export interface DeleteAccountProps {
  onCancel(): void;
}

export interface ModalProps {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose(): void;
}

export interface UpdateDataProps {
  onCancel(): void;
}

export interface UpdatePasswordProps {
  onCancel(): void;
}
