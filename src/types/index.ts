import { IconType } from 'react-icons/lib';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HTMLAttributes, HtmlHTMLAttributes, SetStateAction } from 'react';

export type Announcements = {
  id: number;
  title: string;
}[];

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

export type CartValues = {
  id: number;
  category: string;
  color: string[];
  desc: string;
  discount: number;
  featured: boolean;
  images: string[];
  inStock: boolean;
  name: string;
  numberInStock: number;
  price: number;
  priceDiscount: number;
  quantity?: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  size: (string | number)[];
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export type WishlistValues = {
  id: number;
  category: string;
  color: string[];
  desc: string;
  discount: number;
  featured: boolean;
  images: string[];
  inStock: boolean;
  name: string;
  numberInStock: number;
  price: number;
  priceDiscount: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  size: (string | number)[];
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

export type WishedValue = {
  id: number;
};

export interface CartStore {
  cart: CartValues[];
  wishlists: WishlistValues[];
  wished: number[];
  qty: number;
  tax: number;
  total: number;
  subtotal: number;
  reset(): void;
  addProduct(payload: CartValues): void;
  addWishlist(payload: WishlistValues): void;
  removeWishlist(id: number): void;
  clearCart(): void;
  remove(id: number): void;
  toggleQuantity(payload: { type: string; id: number }): void;
  calcTotals(): void;
}

export type NavLink = {
  id: number;
  text: string;
}[];

type Link = {
  url: string;
  icon: IconDefinition;
  label: string;
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

export interface SliderItemProps {
  url: string;
  img: string;
  desc: string;
  title: string;
  index: number;
  position: string;
}

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
};

export type WishlistItems = WishlistItem[];

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

export type CountryValues = {
  flag: string;
  label: string;
}[];

export interface CountrySelectProps {
  data: CountryValues;
  name: string;
  label: string;
  value: string | number | readonly string[];
  error: string;
  onChange(e: any): void;
}

export type WishlistProps = {
  (actionId: number, product: WishlistValues, wished: number[]): {
    isWished: boolean;
    handleToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  };
};

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

export interface SidebarMenuProps {
  items: Sublink;
}

export interface SidebarMenuItemProps {
  url: string;
  icon: IconDefinition;
  label: string;
}

export interface SidebarHeadingProps {
  title: string;
}

export interface SidebarSearch {
  query: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

export interface SubmenuHeadingProps {
  title: string;
}

export interface SubmenuMenuItemProps {
  url: string;
  icon: IconDefinition;
  label: string;
}

export interface ProductCardProps {
  product: CardProduct;
  onOpen(): void;
  onSelect(value: WishlistValues): void;
}

interface CardProduct {
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
}

export interface CardInfoProps {
  url: string;
  product: CardProduct;
  initialPrice: number;
  priceLabel: number;
  reviewLabel: string;
  inCart: boolean;
  wished: number[];
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
  inCart: boolean;
  onClick(): void;
}

export interface CardButtonsProps {
  product: CardProduct;
  productId: number;
  wished: number[];
}

export interface WishlistButtonProps {
  actionId: number;
  product: WishlistValues;
  wished: number[];
}

export interface CartModalProps {
  product: CartValues | WishlistValues;
  isOpen: boolean;
  onClose(): void;
  onSelect(value: WishlistValues): void;
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

export interface ProductProps {
  product: CartValues;
  inCart: boolean;
  actionLabel: string;
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
  ratingsAverage?: number;
  ratingsQuantity?: number;
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
  title?: string;
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

export interface ProductBox {
  children: React.ReactNode;
}

export interface ProductButtonProps {
  small?: boolean;
  actionLabel: string;
  inCart: boolean;
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

export interface ReviewFormProps {
  rating: number;
  review: string;
  terms: boolean;
  onChangeRating(
    e: React.ChangeEvent<HTMLInputElement>,
    newValue: number
  ): void;
  onChangeReview(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  onChangeTerms(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

export interface EmptyReviewProps {
  rating: number;
  title?: string;
  label?: string;
  onClick(): void;
}

export interface ReviewFilterProps {
  sort: string;
  value: string;
  isOpen: boolean;
  onClick(): void;
  onSort(sort: string | null): void;
}

export interface DeleteModalProps {
  actionId: number;
  isOpen: boolean;
  onClose(): void;
  onAction(id: number): void;
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

export interface FilterSelect
  extends HTMLAttributes<HTMLSelectElement | HTMLInputElement> {
  name: string;
  value?: string | number | readonly string[];
  page?: string;
  label: string;
  options: any[];
}

export interface SelectPriceProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  value: string | number | readonly string[];
  label: string;
  options: PriceOption;
}

export interface RangeInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string | number | readonly string[];
  min?: string | number;
  max?: string | number;
  price: number;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface OrderCardProps {
  id: number;
  total: number;
  status: number;
  createdAt: string;
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
  selected: number | null;
  wishlists: WishlistValues[];
  onAction(wishlist: WishlistValues): void;
  onClose(): void;
  onDelete(id: number): void;
}

export interface WislistPriceProps {
  price: number;
  wishlist: WishlistValues;
  onAction(wishlist: SetStateAction<{}>): void;
}

export interface FormInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  label: string;
  value: string | number | readonly string[];
  error?: string;
  login?: boolean;
}

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  value: string | number | readonly string[];
  error: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  data: SelectInput;
  name: string;
  label: string;
  value: string | number | readonly string[];
  error: string;
  defaultText: string;
}

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  checked: boolean;
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

export interface AccountInputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string | number | readonly string[];
  error?: string;
}

export interface AccountButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

export interface CancelButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick(): void;
}

export interface ModalProps {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose(): void;
}

export interface OverlayProps {
  type: string;
  mode: string;
  children: React.ReactNode;
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
}

export interface SearchHistoryProps {
  id: number;
  query: string;
  onDelete(id: number): void;
}
