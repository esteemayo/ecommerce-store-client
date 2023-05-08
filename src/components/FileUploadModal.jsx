import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const FileUploadModal = ({ openModal, closeModal }) => {
  return (
    <Overlay type={openModal ? 'show' : ''} className='overlay'>
      <Container>
        <Wrapper>
          <CloseButtonContainer>
            <CloseButton type='button' onClick={() => closeModal(false)}>
              <CloseIcon />
            </CloseButton>
          </CloseButtonContainer>
          <UploadContainer>
            <InputContainer>
              <Input type='file' id='file' accept='image/*' />
              <Label htmlFor='file'>Attach a photo</Label>
            </InputContainer>
            <ButtonContainer>
              <Button type='button'>Upload</Button>
            </ButtonContainer>
          </UploadContainer>
        </Wrapper>
      </Container>
    </Overlay>
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
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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

const ButtonContainer = styled.div`
  
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

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default FileUploadModal;
