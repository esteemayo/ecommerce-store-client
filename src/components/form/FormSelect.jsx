import styled from 'styled-components';

const FormSelect = ({ defaultText }) => {
  return (
    <FormGroup>
      <Label></Label>
      <Select>
        <Option value=''>{defaultText}</Option>
      </Select>
    </FormGroup>
  );
}

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 1.4rem;
  color:  ${({ theme }) => theme.textLabel};
`;

const Select = styled.select`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
`;

const Option = styled.option`
  
`;

export default FormSelect;
