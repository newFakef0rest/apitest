import { Outlet, useParams } from 'react-router-dom';
// import Item from '../Item/Item';
import styles from './Main.module.scss';
import Item from '../Items/Items';

function Main () {
  const {id, profId} = useParams();

  console.log(id, profId)
  return (
    <main className={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col__12"> 
                  {id || profId ? (
                    <Outlet />
                  ): 
                  (<Item/>)}
                    
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main;