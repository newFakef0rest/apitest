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

function Item() {
    React.useEffect(() => {
        order.add()
    }, [])



    if (order.products?.state == 'rejected') {
        return <div>Error</div>
    }

    if (order.products?.state == 'pending') {
        return <Loader/>
    }

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

    </List>
  );
}

export default observer(Item);
