'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const SocialIcon = ({ data }) => {
  const { mode } = useSelector((state) => ({ ...state.darkMode }));

  return (
    <Container>
      {data.map((item) => {
        const { id, url, icon, color } = item;
        return (
          <Link key={id} href={url} passHref>
            <IconWrapper mode={mode} color={color}>
              {icon}
            </IconWrapper>
          </Link>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 26.875em) {
    margin-top: 0.7rem;
  }

  a {
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: inherit;
      border-radius: 50%;
      outline-offset: 2px;
      outline-color: #eee;
    }

    &:active {
      color: currentColor;
    }
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #${({ color }) => color};
  background-color: ${({ mode }) => mode && '#121212'};
  color: inherit;
  color: ${({ mode }) => mode && 'rgb(206, 206, 206)'};
  border-radius: 50%;
  cursor: pointer;

  @media only screen and (max-width: 37.5em) {
    width: 3.5rem;
    height: 3.5rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #${({ color, mode }) => mode && color};
    color: ${({ mode }) => mode && 'var(--color-white)'};
  }

  svg {
    font-size: 2rem;
    color: inherit;

    @media only screen and (max-width: 37.5em) {
      font-size: 1.87rem;
    }
  }
`;

SocialIcon.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

export default SocialIcon;
