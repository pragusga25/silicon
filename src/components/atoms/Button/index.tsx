import React from 'react';
import { CustomButtonProps } from '../../../types/button';
import { BUTTON_SIZES } from './size.style';
import { StyledButton, VARIANT_STYLES } from './styles';

const Button: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  text,
  ...props
}) => {
  return (
    <StyledButton
      {...VARIANT_STYLES[variant]}
      {...BUTTON_SIZES[size]}
      {...props}
    >
      {text ? text : children}
    </StyledButton>
  );
};

export default Button;
