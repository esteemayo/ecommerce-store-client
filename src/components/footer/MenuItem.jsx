'use client';

import styled from 'styled-components';
import Link from 'next/link';

const MenuItem = ({ url, label }) => {
  return (
    <ListItem>
      <Link href={url} passHref>{label}</Link>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  outline-color: var(--clr-primary-green);
  transition: all 0.3s ease;

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 26.875em) {
      margin-bottom: 1rem;
    }
  }

  &:hover {
    color: #f5f5f5;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 1px;
  }
`;

export default MenuItem;
