import styled from 'styled-components';

const WishlistHeader = () => {
  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return (
    <Container>
      <HeadingContainer>
        <Heading>My wishlist</Heading>
        <DateTime dateTime={today}>
          {today.toLocaleDateString('en-us', options)}
        </DateTime>
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

  @media only screen and (max-width: 56.25em) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
  }
`;

const DateTime = styled.time`
  font-size: 1.5rem;
  color: #999;

  @media only screen and (max-width: 56.25em) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.2rem;
  }
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

  @media only screen and (max-width: 56.25em) {
    font-size: 1.47rem;
    padding: 1rem 2.5rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
    padding: 0.87rem 1rem;
  }
`;

export default WishlistHeader;
