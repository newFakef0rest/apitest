import { observer} from 'mobx-react-lite';
import { useOrderStore } from '../../contexts/storeContext';
import styles from './Banner.module.scss';
import { useParams } from 'react-router-dom';
import { UserInfo } from '../UserInfo/UserInfo';

export const Banner = observer(() => {

  const {productId, profileId} = useParams<string>();


  const {order} = useOrderStore()

  if (order.product?.state === 'fulfilled' && productId) {
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

  if (order.profile?.state === 'fulfilled' && profileId) {
    return (
      <div className={`${styles.banner} ${styles.banner__second}`}>
        <div className="container">
          <div className="row">
            <div className="col__12">
              <div className={styles.banner__item_profile}>
                <div className={styles.banner__image_profile}>
                  <img src={order.profile.value.profile.image} alt="" />
                </div>
                <div className={styles.banner__title_profile}>
                  <h1>{order.profile.value.profile.username}</h1>
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
