import styled from 'styled-components';

const Reviews = () => {
  return (
    <Container>
      <Heading>Reviews</Heading>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  padding: 6rem 4rem;
  background-color: #f4f8f7;
`;

const Heading = styled.h1`
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.2rem;
`;

export default Reviews;
