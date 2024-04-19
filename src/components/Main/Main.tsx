import { useEffect } from 'react';
import order from '../../store/order';
import styles from './Main.module.scss';
import {observer} from 'mobx-react-lite'
import AlignItemsList from './newItem/newItem';

function Main () {
    useEffect(() => {
        order.add();
    }, [])

  return (
    <main className={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col__12">
                    <AlignItemsList/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default observer(Main);