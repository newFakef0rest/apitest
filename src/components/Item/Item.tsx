import { Avatar, Button } from '@mui/material';
import styles from './Item.module.scss';
import { deepOrange } from '@mui/material/colors';

type TItemProps = {
    title: string,
    info: string
}

export const Item = ({title, info} : TItemProps) => {
  return (
    <div className={styles.item}>
        <Avatar className={styles.item__avatar} sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <h3>{title}</h3>
        <p>{info}</p>
        <Button variant='contained'>Check</Button>
    </div>
  )
}
