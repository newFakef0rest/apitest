import styles from './Header.module.scss';
import HomeIcon from '../../Icons/HomeIcon';
import { Link } from 'react-router-dom';
import { useOrderStore } from '../../contexts/storeContext';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const {order} = useOrderStore();

  const handleClick = () => {
    order.emptyTag()
  }
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={`row ${styles.header__row}`}>
                <div className={styles.header__logo}>
                  <Link to="/" onClick={handleClick}><HomeIcon fontSize="large" /></Link>
                </div>
                <nav className={styles.header__nav}>
                  <ul className={styles.header__ul}>
                    <li><span>Home</span></li>
                    <li><a href="">Sign Up</a></li>
                    <li><a href="">Sign In</a></li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
  )
})
