import * as React from 'react';
import { Button, Chip, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styles from './Item.module.scss';
import { TProducts } from '../../types/types';
import { Link } from 'react-router-dom';

type TItemProps = {
    item: TProducts,
    className?: string
}

const Item = ({item, className} : TItemProps) => {
  return (
    <List className={className} sx={{ width: '100%',bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Link to={`/profile/${item.author.username}`}>
                            <Avatar alt="Remy Sharp" src={item.author.image} />
                        </Link>
                    </ListItemAvatar>

                        {/* Username and Date*/}
                        <Link to={`/profile/${item.author.username}`}>
                        <ListItemText
                            className={`${styles.list__item_box} ${styles.list__item_box_username}`}
                            primary={item.author.username}
                            secondary={
                                <React.Fragment>
                                {new Date(item.createdAt).toDateString()}
                                </React.Fragment>
                            }
                        />
                        </Link>
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
                        {item.tagList.map(tag => (
                            <Chip label={tag} variant="outlined"/>
                               
                            
                        ))}
                    </Stack>
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginLeft: 0, paddingBottom: '20px   '}} />
            </List>
  )
}


export default Item;