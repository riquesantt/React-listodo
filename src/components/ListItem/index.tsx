import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const[IsChecked, setIsChecked] = useState(item.done);
    
    return ( 
        <C.Container done = {IsChecked}> 
           <input 
                type="checkbox"
                checked={IsChecked}
                onChange={e => setIsChecked(e.target.checked)}
           />           
           <label> {item.name}</label>
        <div className = "icons">
           <DeleteOutlineOutlinedIcon/>
           <EditOutlinedIcon/>
        </div>
        </C.Container>

    );
}