import styled from 'styled-components';

const DateTime = ({ date, type, options }) => {
  return (
    <Date dateTime={date}>
      {new Date(date).toLocaleString('en-us', options)}
    </Date>
  );
}

const Date = styled.time`
  
`;

export default DateTime;
