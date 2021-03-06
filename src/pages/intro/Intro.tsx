import React from 'react';
import styled from '@emotion/styled';
import { Container } from 'components/common';
import { Profile } from './components';
import { Project1 } from './components/Project1';
import { Project2 } from './components/Project2';
import { Project3 } from './components/Project3';
import { Project4 } from './components/Project4';
import { Project5 } from './components/Project5';

const Intro = () => {
  return (
    <Container>
      <Profile />
      <Gap />
      <Project5 />
      <Gap />
      <Project1 />
      <Gap />
      <Project4 />
      <Gap />
      <Project2 />
      <Gap />
      <Project3 />
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
