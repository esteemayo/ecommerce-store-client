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
