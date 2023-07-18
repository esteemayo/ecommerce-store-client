'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const MenuItem = ({ url, icon, label }) => {
  return (
    <ListItem>
      <Link href={url} passHref>
        {icon}
        &nbsp;
        {label}
      </Link>
    </ListItem>
  );
}

const ListItem = styled.li`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      font-weight: 500;
      color: currentColor;
      transition: all 0.2s ease;
    }

    &:active {
      color: currentColor;
    }

    &:hover {
      color: #686767;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.textHeader};
    }
  }

  & > * {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    outline-color: #f5f5f5;
  }
`;

MenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuItem;
