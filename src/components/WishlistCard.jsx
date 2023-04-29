import styled from 'styled-components';

const WishlistCard = () => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          
        </ImageContainer>
      </Left>
      <Right>
        Right
      </Right>
    </Container>
  );
}

const Container = styled.article`
  padding: 3rem;
  background-color: var(--clr-white);
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.25);
  border-radius: 0.5rem;
`;

const Left = styled.div`
  
`;

const ImageContainer = styled.div`

`;

const Right = styled.div`
  
`;

export default WishlistCard;
