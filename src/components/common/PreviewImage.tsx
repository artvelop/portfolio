import React from 'react';
import styled from '@emotion/styled';

type Props = {
  url: string;
};

export const PreviewImage: React.FC<Props> = ({ url }) => {
  const moveDetail = () => window.open(url, '_blank');

  return (
    <LayoutWrapper>
      <Item src={url} onClick={moveDetail} />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
`;

const Item = styled.img`
  cursor: pointer;
  height: 400px;
`;
