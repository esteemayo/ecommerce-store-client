'use client';

import styled from 'styled-components';
import Link from 'next/link';

interface BreadCrumbsProps {
  category: string;
}

const BreadCrumbs = ({ category }: BreadCrumbsProps) => {
  return (
    <Container>
      <Link href='/' passHref>
        Home
      </Link>{' '}
      /{' '}
      <Link
        href={`/products/category/${encodeURIComponent(category)}`}
        passHref
      >
        {category}
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textLabel};

  a {
    &:link,
    &:visited {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colCrumbs};
      text-underline-offset: 3px;
      text-transform: capitalize;
      font-size: 1.6rem;
      color: currentColor;
      outline-color: #ccc;
      line-height: 1.2;
    }

    &:hover,
    &:active {
      color: currentColor;
    }
  }
`;

export default BreadCrumbs;
