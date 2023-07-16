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
  }
`;

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
