import styled from 'styled-components';
import PropTypes from 'prop-types';

const DateTime = ({ date, type, options }) => {
  return (
    <Date type={type} dateTime={date}>
      {new Date(date).toLocaleString('en-us', options)}
    </Date>
  );
}

const Date = styled.time`
  font-size: ${({ type }) => type === 'review' ? '1.4rem' : '1.5rem'};
  color: ${({ theme, type }) => type === 'review' ? theme.textRevDate : theme.textWlHeader};

  @media only screen and (max-width: 56.25em) {
    font-size: ${({ type }) => type !== 'review' && '1.3rem'};
  }

  @media only screen and (max-width: 26.875em) {
    font-size: ${({ type }) => type === 'review' && '1.35rem'};
  }

  @media only screen and (max-width: 25em) {
    font-size: ${({ type }) => type === 'review' && '1.3rem'};
  }

  @media only screen and (max-width: 18.75em) {
    font-size: ${({ type }) => type !== 'review' && '1.2rem'};
  }
`;

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.object.isRequired,
};

export default DateTime;
