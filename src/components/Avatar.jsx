'use client';

import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Avatar = ({ src }) => {
  return (
    <Container>
      <Image
        src={src}
        width={50}
        height={50}
        alt=''
      />
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 5rem;
    height: 5rem;
    display: inline-block;
    object-fit: cover;
    border-radius: 50%;

    @media only screen and (max-width: 31.25em) {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
