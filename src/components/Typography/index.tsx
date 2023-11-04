import MTypography , {TypographyProps} from '@mui/material/Typography'
import {styled} from '@mui/material/styles'

const CustomTypography = styled(MTypography)({
    
}) as typeof MTypography;

interface TTypographyProps extends TypographyProps{

}

const Typography = (props:TTypographyProps) => {
    return <CustomTypography {...props}></CustomTypography>
};

export default Typography;