import React from 'react';
import styled from 'styled-components';
import { PRIMARY_STYLES } from './primary.style';
import { SECONDARY_STYLES } from './secondary.style';
import { TERTIARY_STYLES } from './tertiary.style';

export const VARIANT_STYLES = {
  primary: PRIMARY_STYLES,
  secondary: SECONDARY_STYLES,
  tertiary: TERTIARY_STYLES,
};

export const StyledButton = styled.button((props: React.CSSProperties) => ({
  color: '#fff',
  padding: '12px 32px',
  borderRadius: '12px',
  outline: 'none',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  transition: 'all 0.15s ease-out',
  ...props,
}));
