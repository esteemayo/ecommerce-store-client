import styled from 'styled-components';
import Image from 'next/image';

const CardImage = ({ image }) => {
  return (
    <Container>
      <StyledImage
        src={image}
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
`;

export default CardImage;
