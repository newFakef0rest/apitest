import Paper from '@mui/material/Paper';
import styles from './Error.module.scss';

export const Error = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col__12">
                <div className={styles.error}>
                    <Paper elevation={3}>Error</Paper>
                </div>
            </div>
        </div>
    </div>

  )
}
