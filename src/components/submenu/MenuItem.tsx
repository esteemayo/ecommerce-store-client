'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { SubmenuMenuItemProps } from '@/types';

const MenuItem: FC<SubmenuMenuItemProps> = ({ url, icon, label }) => {
  return (
    <ListItem>
      <Link href={url} passHref>
        <FontAwesomeIcon icon={icon} />
        &nbsp;
        {label}
      </Link>
    </ListItem>
  );
};

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

export default MenuItem;
