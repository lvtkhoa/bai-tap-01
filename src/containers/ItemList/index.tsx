import Item from "../Item";
import Box from "../../components/Box";
import {styled} from '@mui/material/styles'
import { ItemProps } from "../Item";

const BoxStyled = styled(Box)({

}) as typeof Box

interface ItemListProps{
    data: ItemProps[]
}

const ItemList = (props:ItemListProps) => {
    const {data} = props;
    return ( 
    <BoxStyled>
        {data.map((each) => (
            <Item avatar={each.avatar} isRemove={each.isRemove} content={each.content} createdAt={each.createdAt}
            isDone={each.isDone} description={each.description} userName={each.userName}></Item>
        ))}
    </BoxStyled> )
}

 export default ItemList




