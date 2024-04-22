import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { observer } from 'mobx-react-lite';
import order from '../../store/order';
import { Loader } from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { Error } from '../Error/Error';
import PaginationRounded from '../Pagination/Pagination';

function Item() {
    const {id} = useParams<{id: string}>();

    if (id){
        if (isNaN(+id)) {
            return <Error />
        }
    }

    const newId = id ? +id : 0

    React.useEffect(() => {
        order.add(newId)
    }, [id])



    if (order.products?.state == 'rejected') {
        return <Error />
    }

    if (order.products?.state == 'pending') {
        return <Loader/>
    }

    console.log(order.products?.value.articlesCount)

  return (
    <List sx={{ width: '100%',bgcolor: 'background.paper' }}>
        {order.products?.value.articles.map((item, idx) => (
            <div key={idx}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.title}
                        secondary={
                            <React.Fragment>
                            {item.slug}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </div>
            
        ))}
        <PaginationRounded count={order.products?.value.articlesCount} newId={newId}/>
    </List>
  );
}

export default observer(Item);
