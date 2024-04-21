import { Outlet, useParams } from 'react-router-dom';
// import Item from '../Item/Item';
import styles from './Main.module.scss';
import Item from '../Item/Item';

function Main () {
  const {id} = useParams<{id: string}>();
  return (
    <main className={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col__12"> 
                  {id ? (
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