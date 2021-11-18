import { ButtonProps, WithCSSAttributes } from './props';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg' | '1/2' | 'full';

export interface CustomButtonProps extends WithCSSAttributes<ButtonProps> {
  variant?: ButtonVariants;
  children?: React.ReactNode;
  text?: string;
  size?: ButtonSize;
}
