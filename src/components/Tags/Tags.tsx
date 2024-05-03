import { Chip } from "@mui/material";
import { observer } from "mobx-react-lite"
import { useOrderStore } from "../../contexts/storeContext";
import { useEffect } from "react";
import { Error } from "../Error/Error";
import { Loader } from "../Loader/Loader";
import styles from './Tags.module.scss';

type TagsProps = {
    tag: string | null,
    setTag: React.Dispatch<React.SetStateAction<string | null>>
}



const Tags = ({tag, setTag} : TagsProps) => {
    const {order} = useOrderStore()

    useEffect(() => {
        order.getTags()
    }, [])

    if (order.tags?.state === 'rejected') {
        return <Error />
    }

    if (order.tags?.state === 'pending') {
        return <Loader />
    }

    const handleClick = (tag : string) => {
        setTag(tag)
    }

    console.log(order.tags?.value.tags)
  return (
    <div className={styles.tags}>
        <span>Popular Tags</span>
        <div className={styles.tags__items}>
            {order.tags?.value.tags.map(tag => (
                <Chip 
                    key={tag} 
                    label={tag} 
                    sx={{ marginRight: '8px', marginBottom: '8px'}} 
                    onClick={() => handleClick(tag)}/> 
            ))}
        </div>
    </div>
  )
}


export default observer(Tags);