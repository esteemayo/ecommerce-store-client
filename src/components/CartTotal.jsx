import styled from 'styled-components';

const CartTotal = () => {
  return (
    <Container>
      <Wrapper>
        <TotalContainer>
          <Text>Subtotal:</Text>
          <PriceTotal>$88.97</PriceTotal>
        </TotalContainer>
        <TotalContainer>
          <Text>Tax:</Text>
          <PriceTotal>$8.897</PriceTotal>
        </TotalContainer>
        <TotalContainer>
          <Text>Total:</Text>
          <PriceTotal>$97.867</PriceTotal>
        </TotalContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 5rem;
  border-top: 1px solid #e2e9e7;
  line-height: 1.2;
`;

const Wrapper = styled.div`
  
`;

const TotalContainer = styled.div`
  
`;

const Text = styled.h3`
  
`;

const PriceTotal = styled.span`
  
`;

export default CartTotal;
