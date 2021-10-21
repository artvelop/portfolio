import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
};

export const ChipItem: React.FC<Props> = ({ label }) => {
  return (
    <Wrap>
      <Chip
        label={label}
        color="secondary"
        variant="outlined"
        onClick={() => {}}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-right: 8px;
  margin-bottom: 8px;
`;
