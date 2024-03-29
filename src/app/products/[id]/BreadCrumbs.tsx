'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useMemo } from 'react';

interface BreadCrumbsProps {
  category: string;
}

const BreadCrumbs = ({ category }: BreadCrumbsProps) => {
  const url = useMemo(() => {
    return `/products/category/${encodeURIComponent(category)}`;
  }, [category]);

  return (
    <Container>
      <StyledLink href='/'>Home</StyledLink> /{' '}
      <StyledLink href={url}>{category}</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textLabel};
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colCrumbs};
  text-underline-offset: 3px;
  text-transform: capitalize;
  font-size: var(--default-font-size);
  color: currentColor;
  outline-color: #ccc;
  line-height: 1.2;

  &:hover,
  &:active {
    color: currentColor;
  }
`;

export default BreadCrumbs;
