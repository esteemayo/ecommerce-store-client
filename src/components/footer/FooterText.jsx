'use client';

import styled from 'styled-components';

const FooterText = ({ year }) => {
  return (
    <Text>
      &copy; {year} by <Author>Emmanuel Adebayo&trade;</Author>. All rights reserved.
      We are a young company always looking for new and creative ideas to help you
      with our products in your everyday work.
    </Text>
  );
}

const Text = styled.p`
  
`;

const Author = styled.strong``;

export default FooterText;
