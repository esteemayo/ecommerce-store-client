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
        icon: <FontAwesomeIcon icon={faCreditCard} />,
        label: 'retail and point of sale',
      },
      {
        url: '/international-ecommerce',
        icon: <FontAwesomeIcon icon={faDisplay} />,
        label: 'international ecommerce',
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
