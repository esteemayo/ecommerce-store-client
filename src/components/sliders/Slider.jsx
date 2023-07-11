'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <Container>
      <Carousel>
        <ImageWrapper>
          <Image
            width={1024}
            height={600}
            src='https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            width={1024}
            height={600}
            src='https://images.pexels.com/photos/3784391/pexels-photo-3784391.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            width={1024}
            height={600}
            src='https://images.pexels.com/photos/4968390/pexels-photo-4968390.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
        </ImageWrapper>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 75vh;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  & > img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Slider;
