import styled from 'styled-components';

const Pagination = () => {
  return (
    <Container>
      <Wrapper>
        <ButtonContainer>
          <Button type='button'>Prev</Button>
          <CurrentPage>9</CurrentPage>
          <Button type='button'>Next</Button>
        </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentPage = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  color: #89a8a0;
  border: 1px solid #89a8a0;
  border-radius: 50%;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.7rem;
  background-color: transparent;
  color: inherit;
  outline-color: #ccc;
  outline-offset: 3px;
  cursor: pointer;
`;

export default Pagination;
