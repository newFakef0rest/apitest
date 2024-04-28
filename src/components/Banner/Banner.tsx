import { observer} from 'mobx-react-lite';
import { useOrderStore } from '../../contexts/storeContext';
import styles from './Banner.module.scss';
import { useParams } from 'react-router-dom';
import { UserInfo } from '../UserInfo/UserInfo';

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
    console.log(order.product.value)
    return (
      <div className={`${styles.banner} ${styles.banner__second}`}>
        <div className="container">
          <div className="row">
            <div className="col__12">
              <div className={styles.banner__item}>
                <div className={styles.banner__title}>
                  <h1>{order.product?.value.article.title}</h1>
                </div>
                <UserInfo article={order.product.value.article} className={styles.banner__user}/>
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
