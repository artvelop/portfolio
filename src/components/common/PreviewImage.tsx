import React from 'react';
import styled from '@emotion/styled';

type Props = {
  url: string;
  height?: string;
};

type StyleItemProps = {
  height: string;
};

export const PreviewImage: React.FC<Props> = ({ url, height = '400px' }) => {
  const moveDetail = () => window.open(url, '_blank');

  return (
    <LayoutWrapper>
      <Item src={url} onClick={moveDetail} height={height} />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
`;

const Item = styled.img<StyleItemProps>`
  border-radius: 4px;
  cursor: pointer;
  height: ${(props) => props.height};
`;
