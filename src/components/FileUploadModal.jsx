import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const FileUploadModal = ({ openModal, closeModal }) => {
  const [perc, setPerc] = useState(0);
  const [file, setFile] = useState(null);

  const closeModalHandler = (e) => {
    if (e.target.classList.contains('overlay')) {
      handleClose();
    }
  };

  const handleClose = () => {
    closeModal(false);
    file && setFile(null);
  };

  const handleUpload = () => {
    console.log(file);
  };

  return (
    <Overlay
      className='overlay'
      type={openModal ? 'show' : ''}
      onClick={closeModalHandler}
    >
      <Container>
        <Wrapper>
          <CloseButtonContainer>
            <CloseButton type='button' onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
          </CloseButtonContainer>
          <UploadContainer>
            <InputContainer>
              {perc > 0 && perc <= 100 ? (
                <UploadProgress>Uploading: {perc}%</UploadProgress>
              ) : (
                <>
                  <Input
                    type='file'
                    id='file'
                    accept='image/*'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Label htmlFor='file'>Attach a photo</Label>
                </>
              )}
            </InputContainer>
            <ButtonContainer>
              <Button type='button' disabled={perc > 0 && perc < 100} onClick={handleUpload}>Upload</Button>
            </ButtonContainer>
          </UploadContainer>
        </Wrapper>
      </Container>
    </Overlay >
  );
}

const Overlay = styled.aside`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
  position: relative;

  @media only screen and (max-width: 25em) {
    width: 35rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 30rem;
    padding-bottom: 2rem;
  }
`;

const CloseButtonContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 1rem;
  right: 0;
`;

const CloseButton = styled.button`
  display: inline-block;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.3rem;
  background-color: transparent;
  color: #838283;
  outline-color: #f7f3f8;
  cursor: pointer;

  svg {
    font-size: 2.3rem;
    fill: currentColor;
  }
`;

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;

  @media only screen and (max-width: 25em) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 25em) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 1.6rem;
  color: #888;
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${Label} {
    outline: 3px solid #89a8a0;
    outline-offset: 3px;
  }

  & + ${Label} {
    color: #89a8a0;
    display: inline-block;
    text-decoration: none;
    padding: 3px;
    border-bottom: 1px solid #89a8a0;
    cursor: pointer;

    @media only screen and (max-width: 25em) {
      width: 100%;
    }

    &:hover {
      background-color: #89a8a0;
      color: var(--clr-white);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

const UploadProgress = styled.span`
  text-transform: capitalize;
  font-size: 1.4rem;
`;

const ButtonContainer = styled.div`
  @media only screen and (max-width: 25em) {
    width: 100%;
  }
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 1rem 3rem;
  background-color: var(--clr-black);
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #333 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #777;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.398rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.3rem;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default FileUploadModal;
