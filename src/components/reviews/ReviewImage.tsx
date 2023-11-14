'use client';

import styled from 'styled-components';
import Image from 'next/image';

interface ReviewImageProps {
  photo: string;
}

const ReviewImage = ({ photo }: ReviewImageProps) => {
  return (
    <Container>
      <StyledImage src={photo} width={1200} height={1200} alt='' />
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgRevImg};

  @media only screen and (max-width: 62.5em) {
    height: 45.2rem;
  }

  @media only screen and (max-width: 50em) {
    height: 40.3rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ReviewImage;
