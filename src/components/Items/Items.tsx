import * as React from 'react';

import { observer } from 'mobx-react-lite';
import { Loader } from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { Error } from '../Error/Error';
import PaginationRounded from '../Pagination/Pagination';
// import styles from './Items.module.scss';
// import order from '../../store/order';

import { useOrderStore } from '../../contexts/storeContext';
import Item from '../Item/Item';

function Items() {
    const {order} = useOrderStore()
    

    const {id} = useParams<{id: string}>();

    if (id){
        if (isNaN(+id)) {
            return <Error />
        }
    }

    const newId = id ? +id : 0

    React.useEffect(() => {
        order.add(newId)
    }, [newId])



    if (order.products?.state === 'rejected') {
        return <Error />
    }

    if (order.products?.state === 'pending') {
        return <Loader/>
    }

  return (
    <>
        {order.products?.value.articles.map((item, idx) => (
            // <h1>{item.slug}</h1>
            <Item key={idx} item={item}></Item>
        ))}
        <PaginationRounded count={order.products?.value.articlesCount} newId={newId ? newId : 1}/>
    </>
  );
}

export default observer(Items);