import styled from 'styled-components';

const Categories = () => {
  return (
    <Container>
      <Heading>Shop by category</Heading>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 10rem 0;
`;

const Heading = styled.h1`
  font-family: inherit;
  font-weight: 600;
  font-size: 2.7rem;
`;

export default Categories;
