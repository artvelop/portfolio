import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;
