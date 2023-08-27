'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Container>
      <StyledLink href='/' passHref>
        <StyledImage
          src='/img/logo.png'
          width={100}
          height={50}
          priority
          alt=''
        />
      </StyledLink>
    </Container>
  );
}

const Container = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline-color: var(--clr-primary-green);
`;

const StyledImage = styled(Image)`
  width: 10rem;
  height: 5rem;
  display: block;
  object-fit: cover;
`;

export default Logo;
