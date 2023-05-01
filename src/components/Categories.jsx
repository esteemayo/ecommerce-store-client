import styled from 'styled-components';
import Category from './Category';

const Categories = () => {
  return (
    <Container>
      <Heading>Shop by category</Heading>
      <Category />
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
  color: var(--clr-secondary-green);
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
    background-color: var(--clr-secondary-green);
    border-radius: 3px;
  }
`;

export default Categories;
