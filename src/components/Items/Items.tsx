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
import Tags from '../Tags/Tags';

function Items() {
    const {order} = useOrderStore()
    const [tag, setTag] = React.useState<string | null>(null);
    

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

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col__9">
                {order.products?.value.articles.map((item, idx) => (
                        // <h1>{item.slug}</h1>
                        <Item key={idx} item={item}></Item>
                    ))}
                    <PaginationRounded count={order.products?.value.articlesCount} newId={newId ? newId + 1 : 0}/>
            </div>
            <div className="col__3">
                <Tags tag={tag} setTag={setTag}/>
            </div>
        </div>
    </div>
    </>
  );
}

export default observer(Items);
