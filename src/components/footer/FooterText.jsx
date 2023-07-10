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
  width: 60%;
  font-size: 1.6rem;
  text-align: center;
  color: var(--clr-white);
  margin: 0 auto;
  line-height: 1.1;
  margin-top: 2rem;

  @media only screen and (max-width: 37.5em) {
    width: 100%;
    text-align: left;
  }
`;

const Author = styled.strong``;

export default FooterText;
