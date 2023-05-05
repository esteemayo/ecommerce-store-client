import styled from 'styled-components';

import Header from './Header';
import Category from './Category';

const Categories = () => {
  return (
    <Container>
      <Header title='Shop by category' />
      <Category />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 120rem;
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
