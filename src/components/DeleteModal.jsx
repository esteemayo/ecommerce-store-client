import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const DeleteModal = () => {
  return (
    <Container>
      <Wrapper>
        <CloseButton>
          <CloseIcon />
        </CloseButton>
        <Heading>Remove a wishlist?</Heading>
        <WarningMessage>Are you sure you wanted to remove this product from your wishlist</WarningMessage>
        <ButtonContainer>
          <CancelButton type='button'>Not now</CancelButton>
          <DeleteButton type='button'>Remove</DeleteButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35rem;
  padding: 5rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Heading = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 2rem;
`;

const WarningMessage = styled.p`
  font-size: 1.6rem;
  color: #999;
  line-height: 1.2;
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CancelButton = styled.button`
  display: inline-block;
  font-size: 1.43rem;
  padding: 1rem 3rem;
  background-color: transparent;
  color: #89a8a0;
  border: 1px solid #e3e3f3;
  border-radius: 0.5rem;
  outline-color: #f1e4f4;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  display: inline-block;
  font-size: 1.43rem;
  padding: 1rem 3rem;
  background-color: #de0a0a;
  color: var(--clr-white);
  border: 1px solid #e3e3f3;
  border-radius: 0.5rem;
  outline-color: #b10101;
  cursor: pointer;
`;

export default DeleteModal;
