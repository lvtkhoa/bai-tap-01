import MBox,{BoxProps} from '@mui/material/Box';

interface TBoxProps extends BoxProps {
}

export const Box = (props:TBoxProps) => {
    return <MBox {...props}></MBox>
};

export default Box