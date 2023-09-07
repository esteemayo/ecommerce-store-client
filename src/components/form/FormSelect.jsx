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
  
`;

const Select = styled.select`
  
`;

const Option = styled.option`
  
`;

export default FormSelect;
