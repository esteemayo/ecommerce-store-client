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
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 2.7rem;
  color: #1658a3;

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
  }
`;

export default Categories;
