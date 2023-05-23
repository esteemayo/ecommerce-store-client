import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductImageModal = ({
  product,
  isOpen,
  setIsOpen,
  isMoved,
  slideIndex,
  lastIndex,
  handleMove,
}) => {
  const closeModalHandler = (e) => {
    if (e.target.classList.contains('imageContainer')) {
      setIsOpen(false);
    }

    const exitModal = (e) => {
      e.preventDefault();

      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', exitModal);
    return () => window.removeEventListener('keydown', exitModal);
  };

  return (
    <Overlay type={isOpen ? 'show' : ''}>
      <CloseButton type='button' onClick={() => setIsOpen(false)}>
        <CloseIcon />
      </CloseButton>
      {isMoved && slideIndex > 0 && (
        <ArrowButton
          type='button'
          direction='left'
          onClick={() => handleMove('left')}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </ArrowButton>
      )}
      <ImageContainer className='imageContainer' onClick={closeModalHandler}>
        <Image
          src={product?.images ? product?.images[slideIndex] : '/img/img-1.jpg'}
          width={1200}
          height={1000}
          alt=''
        />
      </ImageContainer>
      <ArrowButton
        type='button'
        direction='right'
        onClick={() => handleMove('right')}
        style={{ display: slideIndex === lastIndex && 'none' }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </ArrowButton>
    </Overlay>
  );
}

const Overlay = styled.section`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  left: ${({ type }) => type === 'show' ? 0 : '-100vw'};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  transform: scale(${({ type }) => type === 'show' ? 1 : 0});
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
  transition: all 0.3s linear;

  @media only screen and (max-width: 50em) {
    display: none;
  }
`;

const CloseButton = styled.button`
  border: none;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: #777;
  cursor: pointer;

  position: absolute;
  top: 3rem;
  left: 3rem;

  svg {
    font-size: 2rem;
    fill: currentColor;
  }
`;

const ArrowButton = styled.button`
  border: none;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-black);
  color: var(--clr-white);
  border-radius: 50%;
  outline-color: #777;
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '1rem'};
  right: ${({ direction }) => direction === 'right' && '2.5rem'};
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
 
  @media only screen and (max-width: 50em) {
    width: 6.5rem;
    height: 6.5rem;
  }

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.05);
  }

  svg {
    fill: var(--clr-white);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50rem;
    height: 100%;
    display: block;
    object-fit: cover;

    @media only screen and (max-width: 64em) {
      height: 90%;
    }

    @media only screen and (max-width: 50em) {
      width: 60rem;
      height: 80rem;
    }

    @media only screen and (max-width: 37.5em) {
      width: 55rem;
      height: 70rem;
    }
  }
`;

export default ProductImageModal;
