import MBox from "@mui/material/Box";
import {styled} from '@mui/material/styles';


export type ItemProps = {
    avatar: string,
    isRemove: boolean,
    content: string,
    createdAt: Date,
    isDone: boolean,
    description: string,
    userName: string,
    
}

const BoxStyled = styled(MBox)({
    fontFamily: 'sans-serif',
    width: '80px',
    heigth: '80px',
    marginRight: '40px',
    marginLeft: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}) as typeof MBox;

const BoxContainer = styled(MBox)({
    backgroundColor:'#e0e0e2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '10px',
}) as typeof MBox;

const Item = (props: ItemProps) => {
    const dateTime: string = new Date(props.createdAt).toDateString()
    if (!props.isRemove){
        return <BoxContainer style={{}}>
            <p>{dateTime}</p> 
            <BoxStyled><img src={props.avatar} style={{width: '100%', height: '100%'}} /></BoxStyled>
            <BoxStyled>{props.userName}</BoxStyled>
            <BoxStyled style={{color: props.isDone ? 'green' : 'red'}}>{props.content}</BoxStyled>
            <BoxStyled style={{color: props.isDone ? 'green' : 'red' , width: '200px' }}>{props.description}</BoxStyled>
    
        </BoxContainer>
    }
        
}

export default Item;
