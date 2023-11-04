import AddIcon from '@mui/icons-material/AddBox';
import Button from '..';

interface ButtonAddIconProps {

}

const ButtonAddIcon = (props:ButtonAddIconProps) => {
    return <Button style={{width:'50px', height:'55px'}}>
        <AddIcon style={{color:'#fff', width:'50px', height:'50px'}}></AddIcon>
    </Button>
}


export default ButtonAddIcon;
