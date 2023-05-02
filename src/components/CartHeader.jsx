import styled from 'styled-components';

const CartHeader = () => {
  return (
    <Container>
      <Heading>
        <HeadingMain>My cart</HeadingMain>
        <HeadingSub>2</HeadingSub>
      </Heading>
      <ClearButton type='button'>Clear cart</ClearButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem 0.5rem 5rem;
  margin-bottom: 3rem;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.65rem;
`;

const HeadingMain = styled.span`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
`;

const HeadingSub = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-weight: 300;
  font-size: 1.7rem;
  background-color: var(--clr-white);
  color: inherit;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  border-radius: 50%;
`;

const ClearButton = styled.button`
  display: inline-block;
  padding: 0.8rem 2.5rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  background-color: transparent;
  color: #de0a0a;
  border: 1px solid #de0a0a;
  border-radius: 0.5rem;
  outline-color: #eb4d4d;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(222, 10, 10, 0.1);
  }
`;

export default CartHeader;
