import { Outlet, useParams } from 'react-router-dom';
// import Item from '../Item/Item';
import styles from './Main.module.scss';
import Item from '../Items/Items';

function Main () {
  const {id, productId} = useParams();
  return (
    <main className={styles.main}>
        {id || productId ? (
          <Outlet />
        ): 
        (<Item/>)}
    </main>
  )
}

export default Main;