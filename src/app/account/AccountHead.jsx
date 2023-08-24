import styled from 'styled-components';
import PropTypes from 'prop-types';

const AccountHead = ({ onOpen, onAction }) => {
  return (
    <>
      <InputContainer>
        <Label htmlFor='name'>Your name</Label>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='username'>Your username</Label>
        <Input
          type='text'
          id='username'
          name='username'
          placeholder='Username'
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='email'>Email address</Label>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
        />
        <ButtonContainer>
          <Button type='button' onClick={onOpen}>
            Change
          </Button>
        </ButtonContainer>
      </InputContainer>
      <InputContainer>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          name='password'
          placeholder='********'
        />
        <ButtonContainer>
          <Button type='button' onClick={onAction}>
            Change
          </Button>
        </ButtonContainer>
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 10rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
`;

const Input = styled.input`
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 0.9rem 1rem;
  background-color: transparent;
  color: #999;
  border: 2px solid #f3f4f6;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.inputOut};
  caret-color: ${({ theme }) => theme.inputCaret};

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textAccBtn};
  outline-offset: 3px;
  outline-color: #ccc;
  cursor: pointer;
`;

AccountHead.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default AccountHead;
