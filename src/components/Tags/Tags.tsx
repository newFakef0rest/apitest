import { Chip } from "@mui/material";
import { observer } from "mobx-react-lite"
import { useOrderStore } from "../../contexts/storeContext";
import { useEffect } from "react";
import { Error } from "../Error/Error";
import { Loader } from "../Loader/Loader";
import styles from './Tags.module.scss';
import { useNavigate } from "react-router-dom";


const Tags = () => {
    const {order} = useOrderStore()
    const navigate = useNavigate()

    useEffect(() => {
        order.getTags()
    }, [])

    if (order.tags?.state === 'rejected') {
        return <Error />
    }

    if (order.tags?.state === 'pending') {
        return <Loader />
    }

    const handleClick = (item : string) => {
        navigate('/')
        order.fillTag(item)
    }
  return (
    <div className={styles.tags}>
        <span className={styles.tags__title}>Popular Tags</span>
        <div className={styles.tags__items}>
            {order.tags?.value.tags.map(item => (
                <Chip 
                    key={item} 
                    label={item} 
                    sx={{ marginRight: '8px', marginBottom: '8px'}} 
                    onClick={() => handleClick(item)}
                    className={order.tag === item ? styles.tags__active : ''}
                    /> 
            ))}
        </div>
    </div>
  )
}


export default observer(Tags);