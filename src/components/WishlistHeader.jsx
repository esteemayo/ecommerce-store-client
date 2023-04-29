import styled from 'styled-components';

const WishlistHeader = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>My wishlist</Heading>
        <Date dateTime='2023-04-29T00:42:49.511Z'>29 April, 2023</Date>
      </HeadingContainer>
      <SendButton type='button'>Send wishlist</SendButton>
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
  font-size: 1.5rem;
  color: #999;
`;

const SendButton = styled.button`
  border: none;
  display: inline-block;
  text-transform: capitalize;
  padding: 1rem 3rem;
  background-color: var(--clr-white);
  color: #89a8a0;
  border-radius: 0.5rem;
  outline-color: #ccc;
  cursor: pointer;
`;

const CardContainer = styled.div`
  
`;

export default WishlistHeader;
