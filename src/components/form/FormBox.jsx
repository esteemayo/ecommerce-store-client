import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const FormBox = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Box>{children}</Box>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 23.75em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Box = styled.div`
  width: 40rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxForm};
  -webkit-box-shadow: ${({ theme }) => theme.boxForm};
  -moz-box-shadow: ${({ theme }) => theme.boxForm};

  @media only screen and (max-width: 21.25em) {
    width: 35rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 32rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

FormBox.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FormBox;
