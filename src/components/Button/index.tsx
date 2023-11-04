
import  MButton, {ButtonProps} from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const CustomButton = styled(MButton)({
  background: '#b3c8f5',
}) as typeof MButton;


interface TButtonProps extends ButtonProps {
}

export const Button = (props:TButtonProps) => {
  return <CustomButton {...props}></CustomButton>
};


export default Button;