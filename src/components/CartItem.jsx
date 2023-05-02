import Image from 'next/image';
import styled from 'styled-components';

const CartItem = () => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src='/img/img-10.jpg' width={200} height={200} alt='' />
        </ImageContainer>
      </Left>
      <Right>
        Right
      </Right>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 3;
`;

const ImageContainer = styled.div`
  
`;

const Right = styled.div`
  flex: 1;
`;

export default CartItem;
