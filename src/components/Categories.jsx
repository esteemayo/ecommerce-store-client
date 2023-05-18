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

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
    padding: 8rem 0;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }
`;

export default Categories;
