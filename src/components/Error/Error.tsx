import Paper from '@mui/material/Paper';
import styles from './Error.module.scss';
import { Alert, AlertTitle, Button } from '@mui/material';

export const Error = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col__12">
                <div className={styles.error}>
                    <Paper className={styles.error__paper} elevation={3}>      
                      <Alert className={styles.error__alert} severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Page not Found 404
                      </Alert>
                      <Button href="/" variant="contained" color="error">
                        Return to Home Page
                      </Button>
                    </Paper>
                </div>
            </div>
        </div>
    </div>

  )
}
