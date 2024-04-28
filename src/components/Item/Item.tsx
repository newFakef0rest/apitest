import * as React from 'react';
import { Button, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styles from './Item.module.scss';
import { TProducts } from '../../types/types';

type TItemProps = {
    item: TProducts,
    className?: string
}

const Item = ({item, className} : TItemProps) => {
  return (
    <List className={className} sx={{ width: '100%',bgcolor: 'background.paper' }}>
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
                    
                    <Button variant="outlined" href={`/product/${item.slug}`} color="success">
                        Read More...
                    </Button>
                    <Stack direction="row" spacing={1}>
                        {/* {item.taglist.map(tag => (
                            <Chip label='sobaka' variant="outlined"/>
                               
                            
                        ))} */}
                    </Stack>
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginLeft: 0, paddingBottom: '20px   '}} />
            </List>
  )
}


export default Item;