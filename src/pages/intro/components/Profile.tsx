import React from 'react';
import styled from '@emotion/styled';
import { customColor } from '../../../constants';

export const Profile = () => {
  return <Wrapper>HELLO</Wrapper>;
};

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${customColor.white};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  padding: 16px;
`;
