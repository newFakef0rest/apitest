import * as React from 'react';

import { observer } from 'mobx-react-lite';
import { Loader } from '../Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { Error } from '../Error/Error';
import PaginationRounded from '../Pagination/Pagination';
import styles from './Items.module.scss';

import { useOrderStore } from '../../contexts/storeContext';
import Item from '../Item/Item';
import Tags from '../Tags/Tags';
import { Divider } from '@mui/material';

function Items() {
    const {order} = useOrderStore()
    const navigate = useNavigate()
    

    const {id} = useParams<{id: string}>();

    if (id){
        if (isNaN(+id)) {
            return <Error />
        }
    }

    const newId = id ? (+id) - 1 : 0

    React.useEffect(() => {
        order.add(newId)
    }, [newId])



    if (order.products?.state === 'rejected') {
        return <Error />
    }

    if (order.products?.state === 'pending') {
        return <Loader/>
    }

    const handleGlobal = () => {
        navigate('/')
        order.emptyTag()
    }


  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col__9">
                <div className={styles.items__global}>
                    <div className={styles.items__feed}>
                        <span onClick={handleGlobal} className={!order.tag ? styles.items__active : styles.items__unactive}>Global Feed</span>
                        {order.tag && <span className={styles.items__active}>{order.tag}</span>}
                    </div>

                    <Divider variant="inset" component="li" sx={{ marginLeft: 0}} />
                </div>
                {order.products?.value.articles.map((item, idx) => (
                        <Item key={idx} item={item}></Item>
                    ))}
                    <PaginationRounded count={order.products?.value.articlesCount} newId={newId ? newId + 1 : 0}/>
            </div>
            <div className="col__3">
                <Tags/>
            </div>
        </div>
    </div>
    </>
  );
}

export default observer(Items);
