import Box from "../../components/Box";
import ButtonClear from "../../components/Button/ButtonClear";
import {styled} from '@mui/material/styles'

const BoxStyled = styled(Box)({
    display: 'flex',
    
}) as typeof Box;

const BoxText = styled(Box)({
    width: '90%',
    background: '#d9dde7',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    padiingLeft: '15px',
    fontSize: '20px' 
}) as typeof Box;


interface TFooter {

}
const Footer = (props:TFooter) => {
    return <BoxStyled {...props}>
        <BoxText>You have 30 pending task</BoxText>
        <ButtonClear></ButtonClear>
    </BoxStyled>
}

export default Footer;


