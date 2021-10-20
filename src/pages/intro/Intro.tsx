import React from 'react';
import { Container } from 'components/common';
import { Profile } from './components';
import { Project1 } from './components/Project1';
import { Project2 } from './components/Project2';
import styled from '@emotion/styled';

const Intro = () => {
  return (
    <Container>
      <Profile />
      <Gap />
      <Project1 />
      <Gap />
      <Project2 />
      <Footer />
    </Container>
  );
};

const Gap = styled.div`
  margin-top: 24px;
`;

const Footer = styled.div`
  margin-top: 240px;
`;

export default Intro;
