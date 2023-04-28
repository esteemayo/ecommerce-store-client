import styled from 'styled-components';

const Pagination = () => {
  return (
    <Container>
      <Wrapper>
        Pagination
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  padding: 5rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
`;

export default Pagination;
