import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React from 'react';

export const Wrapper: React.FC = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  border-radius: 4px;
  background-color: ${customColor.white};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  padding: 16px;
`;
