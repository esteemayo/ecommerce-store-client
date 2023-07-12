'use client';

import styled from 'styled-components';
import Link from 'next/link';

const BreadCrumbs = ({ category }) => {
  return (
    <Container>
      <Link href='/' passHref>Home</Link> / {' '}
      <Link href={`/products/category/${encodeURIComponent(category)}`} passHref>
        {category}
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default BreadCrumbs;
