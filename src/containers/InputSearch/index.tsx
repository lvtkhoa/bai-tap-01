import Input from "../../components/Input";
import ButtonAddIcon from "../../components/Button/ButtonAddIcon";
import Box from "../../components/Box";
import { styled } from "@mui/material/styles";


const BoxStyled = styled(Box)({
    display: 'flex',
    width: '100%',
    marginBottom: '20px'
}) as typeof Box;

interface TInputSearch {

}

const InputSearch = (props:TInputSearch) => {
    return <BoxStyled {...props}>
        <Input></Input>
        <ButtonAddIcon></ButtonAddIcon>
    </BoxStyled>
};

export default InputSearch;

