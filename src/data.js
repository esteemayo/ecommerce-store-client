import { faBagShopping, faBlog, faBolt, faBook, faBookOpen, faCartShopping, faCreditCard, faDisplay, faHandshake, faLaptop, faLayerGroup, faMoneyBills, faPeopleRoof, faPhone, faShirt, faShop, faSitemap, faStore, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    page: 'sell',
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
        url: '/retail-and-point-of-sale',
        icon: '',
        label: 'retail and point of sale',
      },
      {
        url: '/international-ecommerce',
        icon: '',
        label: 'international ecommerce',
      },
    ],
  },
  {
    page: 'manage',
    links: [
      {
        url: '/manage',
        icon: '',
        label: 'manage complexity',
      },
      {
        url: '/automation',
        icon: '',
        label: 'automation',
      },
      {
        url: '/shipping',
        icon: '',
        label: 'shipping',
      },
      {
        url: '/payments',
        icon: '',
        label: 'payments',
      },
      {
        url: '/notebooks',
        icon: '',
        label: 'notebooks',
      },
    ],
  },
  {
    page: 'integrate',
    links: [
      {
        url: '/integrate',
        icon: '',
        label: 'integrate systems',
      },
      {
        url: '/ecommerce-automation',
        icon: '',
        label: 'automation',
      },
      {
        url: '/headless-commerce',
        icon: '',
        label: 'headless commerce',
      },
      {
        url: '/partners',
        icon: '',
        label: 'partners',
      },
    ],
  },
  {
    page: 'resources',
    links: [
      {
        url: '/support-center',
        icon: '',
        label: 'support center',
      },
      {
        url: '/blog',
        icon: '',
        label: 'blog',
      },
      {
        url: '/support-plans',
        icon: '',
        label: 'support plans',
      },
      {
        url: '/stories',
        icon: '',
        label: 'customer stories',
      },
    ],
  },
];
