import Image from 'next/image';
import styled from 'styled-components';

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src='https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=600'
          width={300}
          height={200}
          alt=''
        />
        <InfoContainer>
          <ProductName>iPhone 14</ProductName>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const Wrapper = styled.div`
  
`;

const InfoContainer = styled.div`
  
`;

const ProductName = styled.h3`
  
`;

export default Product;
