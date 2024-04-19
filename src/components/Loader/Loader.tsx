import ClipLoader from 'react-spinners/ClipLoader'
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
        <ClipLoader color="#64d764" size={90} />
    </div>
  )
}
