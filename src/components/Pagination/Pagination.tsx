import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import styles from './Pagination.module.scss';

type Tprops = {
    count?: number,
    newId: number
}

export default function PaginationRounded({count, newId} : Tprops) {
    const navigate = useNavigate()

    const pageChange = (_: React.ChangeEvent<unknown>, page: number) => {
      // console.log(page)
        navigate(`/${page}`)
    }
  return (
    <div className={styles.pagination}>
      <Pagination 
        count={count ? Math.ceil(count / 10) : 20} 
        page={newId ? newId : 1} 
        variant="outlined" 
        shape="rounded"
        onChange={pageChange} />
    </div>
  );
}