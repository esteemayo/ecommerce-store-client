import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const CardImage = ({ src }) => {
  return (
    <Container>
      <StyledImage
        src={src}
        width={300}
        height={200}
        alt=''
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 20rem;
  display: block;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  @media only screen and (max-width: 37.5em) {
    height: 17.5rem;
  }
`;

CardImage.propTypes = {
  src: PropTypes.string,
};

export default CardImage;
