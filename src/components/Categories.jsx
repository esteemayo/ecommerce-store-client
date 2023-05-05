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

export default Categories;
