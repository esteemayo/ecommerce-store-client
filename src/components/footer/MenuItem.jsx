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
  }
`;

export default MenuItem;
