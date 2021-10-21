import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import React from 'react';

type Props = {
  topVisible?: boolean;
};

type StyleProps = {
  color: string;
};

type BoxStyleProps = {
  top: boolean;
};

export const Wrapper: React.FC<Props> = ({ children, topVisible = true }) => {
  return (
    <Wrap>
      {topVisible && (
        <WindowTop>
          <CircleButton color="#f25330" />
          <CircleButton color="#FEBB34" />
          <CircleButton color="#5CBA73" />
        </WindowTop>
      )}
      <Box top={topVisible}>{children}</Box>
    </Wrap>
  );
};

const Wrap = styled.div``;

const WindowTop = styled.div`
  display: flex;
  background-color: #3f3f3f;
  height: 12px;
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const CircleButton = styled.div<StyleProps>`
  cursor: pointer;
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
  border-radius: 50px;
  margin-right: 8px;
  &:hover {
    opacity: 0.5;
  }
`;

const Box = styled.div<BoxStyleProps>`
  border-radius: 4px;
  ${(props) =>
    props.top && 'border-top-left-radius: 0px; border-top-right-radius: 0px;'}
  background-color: ${customColor.white};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  padding: 16px;
`;
