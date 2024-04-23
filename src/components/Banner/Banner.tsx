import { observer} from 'mobx-react-lite';
import { useOrderStore } from '../../contexts/storeContext';
import styles from './Banner.module.scss';
import { useParams } from 'react-router-dom';

// import order from '../../store/order';

export const Banner = observer(() => {

  const {profId} = useParams<string>();


  const {order} = useOrderStore()

  // if (order.product?.state == 'rejected') {
  //   Password
  // }

  
  // if (order.product?.state == 'pending') {
  //   return <Loader/>
  // }

  

  if (order.product?.state === 'fulfilled' && profId) {
    return (
      <div className={`${styles.banner} ${styles.banner__second}`}>
        <div className="container">
          <div className="row">
            <div className="col__12">
              <div className={styles.banner__item}>
                <div className={styles.banner__title}>
                  <h1>{order.product?.value.article.title}</h1>
                </div>
                <div className={styles.banner__user}>
                  <div className="banner__user_logo">
                    <img src={order.product.value.article.author.image} alt="" />
                  </div>
                  <div className={styles.banner__user_info}>
                    <p>{order.product.value.article.author.username}</p>
                    <span>{new Date(order.product.value.article.createdAt).toDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <>
      <div className={styles.banner}>
      </div>
    </>
  )
})
