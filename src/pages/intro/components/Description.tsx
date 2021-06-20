import React from 'react';
import styled from '@emotion/styled';
import { TyphoGraphy } from '../../../components/common';
import { customColor } from '../../../constants';

type Props = {
  icon: React.ReactNode;
  text: string;
};

export const Description = ({ icon, text }: Props) => {
  return (
    <Wrapper>
      {icon}
      <Between />
      <TyphoGraphy type="h1" color={customColor.gray}>
        {text}
      </TyphoGraphy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Between = styled.div`
  margin-left: 8px;
`;
