import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import styles from './Pagination.module.scss';

type Tprops = {
    count?: number,
    newId: number
}

export default function PaginationRounded({count, newId} : Tprops) {
    const navigate = useNavigate()

    const pageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        navigate(`/${page}`)
    }
  return (
    <div className={styles.pagination}>
      <Pagination 
        count={count ? Math.round(count / 10) : 20} 
        page={newId} 
        variant="outlined" 
        shape="rounded"
        onChange={pageChange} />
    </div>
  );
}