import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const FormBox = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return (
    <Container onMouseOver={handleClose}>
      <Wrapper>
        {children}
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

FormBox.propTypes = {
  children: PropTypes.any.isRequired,
};

export default FormBox;
