import styled from 'styled-components';

const WishlistCard = () => {
  return (
    <Container>
      <Left>
        Left
      </Left>
      <Right>
        Right
      </Right>
    </Container>
  );
}

const Container = styled.article`
  background-color: var(--clr-white);
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
`;

const Left = styled.div`
  
`;

const Right = styled.div`
  
`;

export default WishlistCard;
