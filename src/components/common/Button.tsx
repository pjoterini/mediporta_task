import { Button as MUIButton } from '@mui/material';

interface IProps {
  variant?: 'text' | 'contained' | 'outlined';
  backgroundColor?: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = ({ variant = 'outlined', size = 'medium', backgroundColor, label, onClick }: IProps) => {
  return (
    <MUIButton variant={variant} onClick={onClick} size={size} color={backgroundColor}>
      {label}
    </MUIButton>
  );
};

export default Button;
