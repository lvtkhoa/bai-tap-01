import MInput, {TextFieldProps} from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomInput = styled(MInput)({
  backgroud: 'white',
  width: '95%',
  color: 'blue',
  
}) as unknown as typeof MInput;

type TInputProps = TextFieldProps &{

}

export const Input = (props:TInputProps) => {
  return <CustomInput {...props} label='Tasks to be done...'></CustomInput>
};

export default Input;

