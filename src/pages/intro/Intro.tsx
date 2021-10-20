import React from 'react';
import { Container } from 'components/common';
import { Profile } from './components';
import { Project1 } from './components/Project1';
import styled from '@emotion/styled';

const Intro = () => {
  return (
    <Container>
      <Profile />
      <Gap />
      <Project1 />
    </Container>
  );
};

const Gap = styled.div`
  margin-top: 24px;
`;

export default Intro;
