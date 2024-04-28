import { Outlet, useParams } from 'react-router-dom';
// import Item from '../Item/Item';
import styles from './Main.module.scss';
import Item from '../Items/Items';

function Main () {
  const {id, profId} = useParams();
  return (
    <main className={styles.main}>
        {id || profId ? (
          <Outlet />
        ): 
        (<Item/>)}
    </main>
  )
}

export default Main;