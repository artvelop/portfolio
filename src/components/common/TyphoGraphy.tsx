import React, { useMemo } from 'react';
import styled from '@emotion/styled';

type TyphoGraphyProps = {
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'sm1' | 'sm2';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
};

type StyledTyphoGraphyProps = {
  type: '24' | '22' | '20' | '18' | '14' | '12' | '10' | '8';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
};

export const TyphoGraphy = ({
  children,
  type,
  color,
  textAlign,
}: TyphoGraphyProps) => {
  const changeTypeFontSize = useMemo(() => {
    switch (type) {
      case 'h1':
        return '24';
      case 'h2':
        return '22';
      case 'h3':
        return '20';
      case 'h4':
        return '18';
      case 'body1':
        return '14';
      case 'body2':
        return '12';
      case 'sm1':
        return '10';
      case 'sm2':
        return '8';
      default:
        return '14';
    }
  }, [type]);

  return (
    <TyphoGraphyText
      type={changeTypeFontSize}
      color={color || '#181818'}
      textAlign={textAlign || 'left'}>
      {children}
    </TyphoGraphyText>
  );
};

const TyphoGraphyText = styled.div<StyledTyphoGraphyProps>`
  font-size: ${(props) => props.type}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`;
