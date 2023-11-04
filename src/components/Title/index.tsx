import MTitle, {AlertTitleProps}from '@mui/material/AlertTitle';
import {styled} from '@mui/material/styles';

const CustomTitle = styled(MTitle)({
  fontSize: ' 30px',
  color: '#0084c5',
  fontFamily:'sans-serif',
  justifyContent: 'center',
  alignItems: 'center'
}) as typeof MTitle;

interface TTitle extends AlertTitleProps{
}

const Title = (props:TTitle) => {
  return <CustomTitle {...props }></CustomTitle>
};

export default Title;
