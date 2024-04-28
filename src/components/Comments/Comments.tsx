import { useOrderStore } from '../../contexts/storeContext';
import { Comment } from '../Comment/Comment';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import styles from './Comments.module.scss';

export const Comments = () => {
    const {order} = useOrderStore()

    if (order.comments?.state === 'pending') {
        return <Loader />
    }

    if (order.comments?.state === 'rejected') {
        return <Error />
    }
  return (
    <div className={styles.comments}>
        <div className="container">
            <div className={`row ${styles.comments__row}`}>
                <div className="col__6">

                        <ul className={styles.comments__ul}>
                            {order.comments?.value.comments.map(comment => (
                                <Comment comment={comment} className={styles.comments__comment}/>
                            ))}

                        </ul>

                </div>
            </div>
        </div>
    </div>
  )
}