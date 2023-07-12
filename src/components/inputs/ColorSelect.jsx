'use client';

import styled from 'styled-components';
import { useCallback } from 'react';

const ColorSelect = ({ mode, value, modal, selected, onAction, onSecondaryAction }) => {
  const handleColor = useCallback((color) => {
    onAction(color);
    onSecondaryAction(color);
  }, [onAction, onSecondaryAction]);

  return (
    <Container modal={modal}>
      <Heading modal={modal}>Color</Heading>
      <Wrapper modal={modal}>
        {value.map((item, index) => {
          return (
            <Color
              key={index}
              type='button'
              color={item}
              mode={mode}
              selected={item === selected}
              onClick={() => handleColor(item)}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: ${({ modal }) => modal ? '0.5rem 0' : '2rem 0'};
`;

const Heading = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: ${({ modal }) => modal ? '1.5rem' : '1.7rem'};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ modal }) => modal ? '1rem' : '2.6rem'};
  margin: ${({ modal }) => modal ? '1rem 0' : '1.5rem 0'};

  @media only screen and (max-width: 59.375em) {
    gap: ${({ modal }) => !modal && '2.35rem'};
  }

  @media only screen and (max-width: 37.5em) {
    margin-top: ${({ modal }) => !modal && '1.3rem'};
  }

  @media only screen and (max-width: 18.75em) {
    gap: ${({ modal }) => !modal && '2rem'};
  }
`;

const Color = styled.button`
  border: none;
  display: block;
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ color, mode }) => mode && color === 'black' ? '#111' : color};
  background-color: ${({ color, mode }) => !mode && color === 'white' && '#f9f9f9'};
  border-radius: 50%;
  outline: 1px solid ${({ theme, selected }) => selected ? theme.cartSelected : 'transparent'};
  outline-offset: 2px;
  cursor: ${({ selected }) => selected ? 'default' : 'pointer'};

  @media only screen and (max-width: 37.5em) {
    width: ${({ modal }) => !modal && '2rem'};
    height: 2rem;
  }
`;

export default ColorSelect;
