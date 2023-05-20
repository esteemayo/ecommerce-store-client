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
      <TotalItems>- 1477 items -</TotalItems>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 5rem 0 10rem;

  @media only screen and (max-width: 37.5em) {
    padding-bottom: 5rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  background-color: var(--clr-white);
  color: inherit;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  border-radius: 0.5rem;

  @media only screen and (max-width: 37.5em) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
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

  @media only screen and (max-width: 37.5em) {
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.5rem;
  background-color: transparent;
  color: inherit;
  outline-color: #ccc;
  outline-offset: 3px;
  cursor: pointer;
`;

const TotalItems = styled.p`
  display: block;
  text-align: center;
  text-transform: lowercase;
  padding-top: 2rem;
  font-size: 1.5rem;
  color: #999;
`;

export default Pagination;
