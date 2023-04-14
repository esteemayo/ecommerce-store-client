import styled from 'styled-components';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 500 ? true : false);
  };

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Container>
      {isVisible && (
        <Wrapper onClick={scrollHandler}>
          <KeyboardDoubleArrowUpIcon />
        </Wrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 3000;
  animation: fadeIn 700ms ease-in-out 1s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-white);
  color: #1658a3;
  border-radius: 50%;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    box-shadow: rgb(0, 0, 0, 0.25) 0 0.4rem 2rem;
  }

  svg {
    font-size: 1.5rem;
    color: inherit;
  }
`;

export default ScrollToTop;
