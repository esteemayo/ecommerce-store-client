import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faBlog,
  faBolt,
  faBook,
  faBookOpen,
  faCartShopping,
  faCreditCard,
  faDisplay,
  faHandshake,
  faLaptop,
  faLayerGroup,
  faMoneyBills,
  faPeopleRoof,
  faPhone,
  faShirt,
  faShop,
  faSitemap,
  faStore,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons';

export const sublinks = [
  {
    page: 'products',
    links: [
      {
        url: '/featured',
        icon: <FontAwesomeIcon icon={faLayerGroup} />,
        label: 'featured',
      },
      {
        url: '/clothing',
        icon: <FontAwesomeIcon icon={faShirt} />,
        label: 'clothing',
      },
      {
        url: '/accessories',
        icon: <FontAwesomeIcon icon={faBagShopping} />,
        label: 'accessories',
      },
    ],
  },
  {
    page: 'sells',
    links: [
      {
        url: '/sell',
        icon: <FontAwesomeIcon icon={faShop} />,
        label: 'sell everywhere',
      },
      {
        url: '/online-store',
        icon: <FontAwesomeIcon icon={faStore} />,
        label: 'online store',
      },
      {
        url: '/point-of-sale',
        icon: <FontAwesomeIcon icon={faCreditCard} />,
        label: 'point of sale',
      },
      {
        url: '/ecommerce',
        icon: <FontAwesomeIcon icon={faDisplay} />,
        label: 'ecommerce',
      },
    ],
  },
  {
    page: 'manage',
    links: [
      {
        url: '/manage',
        icon: <FontAwesomeIcon icon={faPeopleRoof} />,
        label: 'manage complexity',
      },
      {
        url: '/automation',
        icon: <FontAwesomeIcon icon={faBolt} />,
        label: 'automation',
      },
      {
        url: '/shipping',
        icon: <FontAwesomeIcon icon={faTruckFast} />,
        label: 'shipping',
      },
      {
        url: '/payments',
        icon: <FontAwesomeIcon icon={faMoneyBills} />,
        label: 'payments',
      },
      {
        url: '/notebooks',
        icon: <FontAwesomeIcon icon={faBook} />,
        label: 'notebooks',
      },
    ],
  },
  {
    page: 'integrate',
    links: [
      {
        url: '/integrate',
        icon: <FontAwesomeIcon icon={faLaptop} />,
        label: 'integrate systems',
      },
      {
        url: '/ecommerce-automation',
        icon: <FontAwesomeIcon icon={faStore} />,
        label: 'automation',
      },
      {
        url: '/headless-commerce',
        icon: <FontAwesomeIcon icon={faCartShopping} />,
        label: 'headless commerce',
      },
      {
        url: '/partners',
        icon: <FontAwesomeIcon icon={faHandshake} />,
        label: 'partners',
      },
    ],
  },
  {
    page: 'resources',
    links: [
      {
        url: '/support-center',
        icon: <FontAwesomeIcon icon={faPhone} />,
        label: 'support center',
      },
      {
        url: '/blog',
        icon: <FontAwesomeIcon icon={faBlog} />,
        label: 'blog',
      },
      {
        url: '/support-plans',
        icon: <FontAwesomeIcon icon={faSitemap} />,
        label: 'support plans',
      },
      {
        url: '/stories',
        icon: <FontAwesomeIcon icon={faBookOpen} />,
        label: 'customer stories',
      },
    ],
  },
];

export const storeLinks = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '#',
    text: 'About us',
  },
  {
    id: 3,
    url: '#',
    text: 'Become a customer',
  },
  {
    id: 4,
    url: '#',
    text: 'Return policy',
  },
  {
    id: 5,
    url: '#',
    text: 'Contact us',
  },
  {
    id: 6,
    url: '#',
    text: 'Status',
  },
  {
    id: 7,
    url: '#',
    text: 'Pricing',
  },
  {
    id: 8,
    url: '#',
    text: 'Partners and factories',
  },
];

export const discoverLinks = [
  {
    id: 1,
    url: '#',
    text: 'Developer API',
  },
  {
    id: 2,
    url: '#',
    text: 'Tools',
  },
  {
    id: 3,
    url: '#',
    text: 'Blog',
  },
  {
    id: 4,
    url: '#',
    text: 'Gift cards',
  },
  {
    id: 5,
    url: '#',
    text: 'Rewards',
  },
  {
    id: 6,
    url: '#',
    text: 'Affiliate',
  },
  {
    id: 7,
    url: '#',
    text: 'Work with us',
  },
  {
    id: 8,
    url: '#',
    text: 'Our Stores',
  },
];

export const customerLinks = [
  {
    id: 1,
    url: '#',
    text: 'Shipping Information',
  },
  {
    id: 2,
    url: '#',
    text: 'Returns & Exchange',
  },
  {
    id: 3,
    url: '#',
    text: 'Coupon codes',
  },
  {
    id: 4,
    url: '#',
    text: 'F.A.Q.',
  },
  {
    id: 5,
    url: '#',
    text: 'Terms & condition',
  },
  {
    id: 6,
    url: '#',
    text: 'Refund Policy',
  },
  {
    id: 7,
    url: '#',
    text: 'Privacy Policy',
  },
  {
    id: 8,
    url: '#',
    text: 'Accessibility statement',
  },
];

export const social = [
  {
    id: 1,
    url: '#',
    icon: <FacebookIcon />,
    color: '3b5999',
  },
  {
    id: 2,
    url: '#',
    icon: <TwitterIcon />,
    color: '55acee',
  },
  {
    id: 3,
    url: '#',
    icon: <InstagramIcon />,
    color: 'e4405f',
  },
  {
    id: 4,
    url: '#',
    icon: <LinkedInIcon />,
    color: '0a66c2',
  },
  {
    id: 5,
    url: '#',
    icon: <PinterestIcon />,
    color: 'e60023',
  },
];

export const footerLinks = [
  {
    id: 1,
    url: '#',
    text: 'Terms of purchase',
  },
  {
    id: 2,
    url: '#',
    text: 'Security and privacy',
  },
  {
    id: 3,
    url: '#',
    text: 'Newsletter',
  },
];

export const storeProducts = [
  {
    id: 1,
    name: 'The Stanley Rain Jacket in Black',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 300,
    numberInStock: 1200,
    inStock: true,
    images: [
      '/img/img-2.jpg',
      '/img/img-3.jpg',
      '/img/img-5.jpg',
      '/img/img-7.jpg',
      '/img/img-10.jpg',
      '/img/img-12.jpg',
    ],
    featured: true,
    color: [
      'black',
      'blue',
      'crimson',
      'pink',
    ],
    size: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
    ],
    category: 'shirts',
    tags: [
      'fashion',
      'wears',
    ],
    ratingsQuantity: 5,
    ratingsAverage: 5,
    createdAt: '2023-02-06T02:14:51.823Z',
    updatedAt: '2023-02-06T02:14:51.823Z',
    slug: 'the-stanley-rain-jacket-in-black',
  },
  {
    id: 2,
    name: 'Sweat Shirt',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 245,
    numberInStock: 1000,
    inStock: true,
    images: [
      '/img/img-1.jpg',
      '/img/img-4.jpg',
      '/img/img-6.jpg',
      '/img/img-8.jpg',
      '/img/img-9.jpg',
      '/img/img-11.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'gray',
      'yellow',
    ],
    size: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
    ],
    category: 'shirts',
    tags: [
      'fashion',
      'wears',
    ],
    ratingsQuantity: 1,
    ratingsAverage: 5,
    createdAt: '2023-02-06T02:12:32.097Z',
    updatedAt: '2023-02-06T02:14:11.039Z',
    slug: 'sweat-shirt',
  },
  {
    id: 3,
    name: 'iPhone 14',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 700,
    numberInStock: 1000,
    inStock: true,
    images: [
      '/img/img-4.jpg',
      '/img/img-3.jpg',
      '/img/img-1.jpg',
      '/img/img-7.jpg',
      '/img/img-11.jpg',
      '/img/img-12.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'white',
      'rosegold',
    ],
    size: [],
    category: 'gadgets',
    tags: [
      'phones',
      'gadgets',
      'new',
      'camera',
    ],
    ratingsQuantity: 2,
    ratingsAverage: 4,
    createdAt: '2023-02-06T00:20:21.262Z',
    updatedAt: '2023-02-06T00:52:16.694Z',
    slug: 'iphone-14',
  },
  {
    id: 4,
    name: 'Samsumg Galaxy Note 5',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 300,
    numberInStock: 500,
    inStock: true,
    images: [
      '/img/img-11.jpg',
      '/img/img-3.jpg',
      '/img/img-6.jpg',
      '/img/img-8.jpg',
      '/img/img-10.jpg',
      '/img/img-12.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'white',
    ],
    size: [],
    category: 'gadgets',
    tags: [
      'phones',
      'gadgets',
      'new',
      'camera',
    ],
    ratingsQuantity: 2,
    ratingsAverage: 4.95,
    createdAt: '2023-02-02T16:48:57.511Z',
    updatedAt: '2023-02-02T16:48:57.511Z',
    slug: 'samsumg-galaxy-note-5',
  },
  {
    id: 5,
    name: 'Dennim Jean',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 200,
    numberInStock: 500,
    inStock: true,
    images: [
      '/img/img-2.jpg',
      '/img/img-3.jpg',
      '/img/img-5.jpg',
      '/img/img-7.jpg',
      '/img/img-10.jpg',
      '/img/img-12.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'gray',
    ],
    size: [
      'M',
      'L',
      'XL',
      'XXL',
    ],
    category: 'jeans',
    tags: [
      'jeans',
      'fashion',
      'new',
    ],
    ratingsQuantity: 2,
    ratingsAverage: 4.85,
    createdAt: '2023-02-02T16:45:30.138Z',
    updatedAt: '2023-02-02T16:45:30.138Z',
    slug: 'dennim-jean',
  },
  {
    id: 6,
    name: 'Agbada',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 120,
    numberInStock: 25,
    inStock: true,
    images: [
      '/img/img-1.jpg',
      '/img/img-4.jpg',
      '/img/img-6.jpg',
      '/img/img-8.jpg',
      '/img/img-9.jpg',
      '/img/img-11.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'white',
      'gray',
    ],
    size: [
      'S',
      'M',
      'L',
      'XL',
      'XXL',
    ],
    category: 'shirts',
    tags: [
      'shirts',
      'agbadagang',
      'fashion',
      'new',
      'owambe',
    ],
    ratingsQuantity: 7,
    ratingsAverage: 4.8,
    createdAt: '2023-02-02T16:43:48.757Z',
    updatedAt: '2023-02-02T16:43:48.757Z',
    slug: 'agbada',
  },
  {
    id: 7,
    name: 'Adiddas Thick T-Shirt',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 120,
    numberInStock: 70,
    inStock: true,
    images: [
      '/img/img-4.jpg',
      '/img/img-3.jpg',
      '/img/img-1.jpg',
      '/img/img-7.jpg',
      '/img/img-11.jpg',
      '/img/img-12.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'yellow',
      'white',
      'gray',
    ],
    size: [
      'XS',
      'M',
      'L',
      'XL',
      'XXL',
    ],
    category: 'shirts',
    tags: [
      'shirts',
      'genz',
      'fashion',
      'new',
    ],
    ratingsQuantity: 10,
    ratingsAverage: 5,
    createdAt: '2023-02-02T16:39:59.089Z',
    updatedAt: '2023-02-02T16:39:59.089Z',
    slug: 'nike-t-shirt',
  },
  {
    id: 8,
    name: 'iPhone 13',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 750,
    numberInStock: 1500,
    inStock: true,
    images: [
      '/img/img-2.jpg',
      '/img/img-3.jpg',
      '/img/img-5.jpg',
      '/img/img-7.jpg',
      '/img/img-10.jpg',
      '/img/img-12.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'white',
      'rosegold',
    ],
    size: [],
    category: 'gadgets',
    tags: [
      'phones',
      'gadgets',
      'new',
      'camera',
    ],
    ratingsQuantity: 2,
    ratingsAverage: 4,
    createdAt: '2023-02-06T00:20:21.262Z',
    updatedAt: '2023-02-06T00:52:16.694Z',
    slug: 'iphone-13',
  },
  {
    id: 9,
    name: 'Samsumg Galaxy 13',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 300,
    numberInStock: 500,
    inStock: true,
    images: [
      '/img/img-1.jpg',
      '/img/img-4.jpg',
      '/img/img-6.jpg',
      '/img/img-8.jpg',
      '/img/img-9.jpg',
      '/img/img-11.jpg',
    ],
    featured: true,
    color: [
      'black',
      'blue',
      'white',
    ],
    size: [],
    category: 'gadgets',
    tags: [
      'phones',
      'gadgets',
      'new',
      'camera'
    ],
    ratingsQuantity: 2,
    ratingsAverage: 4.95,
    createdAt: '2023-02-02T16:48:57.511Z',
    updatedAt: '2023-02-02T16:48:57.511Z',
    slug: 'samsumg-galaxy-13',
  },
  {
    id: 10,
    name: 'Dennim Rain Jacket',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 200,
    numberInStock: 500,
    inStock: true,
    images: [
      '/img/img-4.jpg',
      '/img/img-3.jpg',
      '/img/img-1.jpg',
      '/img/img-7.jpg',
      '/img/img-11.jpg',
      '/img/img-12.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'gray',
    ],
    size: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
    ],
    category: 'jeans',
    tags: [
      'jeans',
      'fashion',
      'new',
    ],
    ratingsQuantity: 2,
    ratingsAverage: 4.85,
    createdAt: '2023-02-02T16:45:30.138Z',
    updatedAt: '2023-02-02T16:45:30.138Z',
    slug: 'dennim-rain-jacket',
  },
  {
    id: 11,
    name: 'Native wears',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 120,
    numberInStock: 25,
    inStock: true,
    images: [
      '/img/img-2.jpg',
      '/img/img-3.jpg',
      '/img/img-5.jpg',
      '/img/img-7.jpg',
      '/img/img-10.jpg',
      '/img/img-12.jpg',
    ],
    featured: false,
    color: [
      'black',
      'blue',
      'white',
      'gray',
    ],
    size: [
      'S',
      'M',
      'L',
      'XL',
      'XXL'
    ],
    category: 'shirts',
    tags: [
      'shirts',
      'fashion',
      'new',
      'owambe',
    ],
    ratingsQuantity: 3,
    ratingsAverage: 4.5,
    createdAt: '2023-02-02T16:43:48.757Z',
    updatedAt: '2023-02-02T16:43:48.757Z',
    slug: 'native-wears',
  },
  {
    id: 12,
    name: 'Nike T-shirt',
    desc: 'Let the rain fall, you\'ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket. Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free) DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes. 2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord. Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam. Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.',
    price: 100,
    numberInStock: 50,
    inStock: true,
    images: [
      '/img/img-1.jpg',
      '/img/img-4.jpg',
      '/img/img-6.jpg',
      '/img/img-8.jpg',
      '/img/img-9.jpg',
      '/img/img-11.jpg',
    ],
    featured: true,
    color: [
      'black',
      'blue',
      'yellow',
      'white',
      'gray',
    ],
    size: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
    ],
    category: 'shirts',
    tags: [
      'shirts',
      'genz',
      'fashion',
      'new',
    ],
    ratingsQuantity: 4,
    ratingsAverage: 4.5,
    createdAt: '2023-02-02T16:39:59.089Z',
    updatedAt: '2023-02-02T16:39:59.089Z',
    slug: 'nike-t-shirt',
  },
];

export const topReviews = [
  {
    id: 1,
    rating: 5,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Sarah Paul',
      photo: '/img/reviewer-1.jpg'
    },
  },
  {
    id: 2,
    rating: 5,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'John Doe',
      photo: '/img/reviewer-2.jpg'
    },
  },
  {
    id: 3,
    rating: 4.5,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Mary Doe',
      photo: '/img/reviewer-3.jpg'
    },
  },
  {
    id: 4,
    rating: 4.8,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Christian Vegas',
      photo: '/img/reviewer-4.jpg'
    },
  },
  {
    id: 5,
    rating: 5,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Mac Allister',
      photo: '/img/user-1.jpg'
    },
  },
  {
    id: 6,
    rating: 4.9,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Harry Rodriguez',
      photo: '/img/user-2.jpg'
    },
  },
  {
    id: 7,
    rating: 5,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Bill James',
      photo: '/img/user-3.jpg'
    },
  },
  {
    id: 8,
    rating: 4.5,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Ayla Cornell',
      photo: '/img/user-4.jpg'
    },
  },
  {
    id: 9,
    rating: 5,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Lourdes Browning',
      photo: '/img/user-5.jpg'
    },
  },
  {
    id: 10,
    rating: 4.7,
    review: 'Exactly what I wanted - slightly elevated but still warm. Fits like a dream with nice big pockets with zippers. Great addition!',
    user: {
      name: 'Kate Morrison',
      photo: '/img/user-9.jpg'
    },
  },
];

export const reviews = [
  {
    id: 1,
    user: {
      name: 'Jesse hopkins',
      img: '/img/user-1.jpg',
    },
    rating: 5,
    review: 'Gorgeous design! Even more responsive than the previous version. A pleasure to use!',
  },
  {
    id: 2,
    user: {
      name: 'Alice banks',
    },
    rating: 4,
    review: 'The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.',
  },
];

export const wishlists = [
  {
    id: 1,
    name: 'The Stanley Rain Jacket in Black',
    desc: 'Libero magna mi suspendisse curabitur, lorem mi massa, ipsum pharetra posuere  elementum.',
    img: '/img/user-7.jpg',
  },
  {
    id: 2,
    name: 'Samsumg Galaxy 13',
    desc: 'Orci ullamcorper primis fusce, elit sit in penatibus pretium. Cogue eget consequat.',
    img: '/img/user-8.jpg',
  },
  {
    id: 3,
    name: '',
    desc: 'Sapien dui sed amet, vitae in vestibulum, egestas lobortis metus.',
    img: '/img/user-9.jpg',
  },
];
