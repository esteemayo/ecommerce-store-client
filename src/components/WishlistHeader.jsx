import styled from 'styled-components';

const WishlistHeader = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>My wishlist</Heading>
        <Date dateTime='2023-04-29T00:42:49.511Z'>29 April, 2023</Date>
      </HeadingContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 2rem 2.5rem;
`;

const HeadingContainer = styled.div`
  line-height: 1.1;
`;

const Heading = styled.h1`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.8rem;
`;

const Date = styled.time`

`;

export default WishlistHeader;
