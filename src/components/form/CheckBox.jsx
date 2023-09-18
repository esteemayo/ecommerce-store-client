import styled from 'styled-components';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CheckBox = ({ name, label, ...rest }) => {
  const { mode } = useSelector((state) => ({ ...state.darkMode }));

  const checkmarkClasses = useMemo(() => {
    if (mode) {
      return `checkmark dark`;
    }

    return `checkmark light`;
  }, [mode]);

  return (
    <Container className='checkContainer'>
      <StyledCheckBox
        {...rest}
        id={name}
        name={name}
        type='checkbox'
        className='checkbox'
      />
      <CheckMark className={checkmarkClasses} />
      <Label htmlFor={name}>{label}</Label>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledCheckBox = styled.input``;

const Label = styled.label`
  width: 10rem;
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
  margin-left: 3.5rem;
`;

const CheckMark = styled.span``;

CheckBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rest: PropTypes.any,
};

export default CheckBox;
