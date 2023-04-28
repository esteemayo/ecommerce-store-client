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
  cursor: default;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 2rem 3rem;
  background-color: var(--clr-white);
  color: inherit;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  border-radius: 0.5rem;
`;

const Button = styled.button`
  
`;

export default Pagination;
