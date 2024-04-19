import Item from '../Item/Item';
import styles from './Main.module.scss';

function Main () {

  return (
    <main className={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col__12">
                    <Item />
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main;