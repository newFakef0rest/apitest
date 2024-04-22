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
import styles from './Item.module.scss';
import { Button, Chip, Stack } from '@mui/material';

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
  return (
    <>
        {order.products?.value.articles.map((item, idx) => (
            <List key={idx} sx={{ width: '100%',bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.author.image} />
                    </ListItemAvatar>

                        {/* Username and Date*/}
                        <ListItemText
                            className={`${styles.list__item_box} ${styles.list__item_box_username}`}
                            primary={item.author.username}
                            secondary={
                                <React.Fragment>
                                {new Date(item.createdAt).toDateString()}
                                </React.Fragment>
                            }
                        />
                </ListItem>
                <ListItem className={styles.list__item}>
                        {/* Main Content */}
                        <ListItemText
                            className={`${styles.list__item_box} ${styles.list__item_content}`}
                            primary={item.title}
                            secondary={
                                <React.Fragment>
                                {item.slug}
                                </React.Fragment>
                            }
                        />
                </ListItem>
                <ListItem sx={{ justifyContent: 'space-between'}}>
                    <Button variant="outlined" color="success">Read More...</Button>
                    <Stack direction="row" spacing={1}>
                        {/* {item.taglist.map(tag => (
                            <Chip label='sobaka' variant="outlined"/>
                        ))} */}
                    </Stack>
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginLeft: 0, paddingBottom: '20px   '}} />
            </List>
            
        ))}
        <PaginationRounded count={order.products?.value.articlesCount} newId={newId ? newId : 1}/>
    </>
  );
}

export default observer(Item);
