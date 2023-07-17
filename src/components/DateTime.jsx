import styled from 'styled-components';

const DateTime = ({ date, type, options }) => {
  return (
    <Date dateTime={date}>
      {new Date(date).toLocaleString('en-us', options)}
    </Date>
  );
}

const Date = styled.time`
  font-size: ${({ type }) => type === 'review' ? '1.4rem' : '1.5rem'};
`;

export default DateTime;
