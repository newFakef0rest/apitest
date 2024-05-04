import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import styles from './Pagination.module.scss';

type Tprops = {
    count?: number,
    newId: number
    profilePage?: string
}

export default function PaginationRounded({count, newId, profilePage} : Tprops) {
    const navigate = useNavigate()

    const pageChange = (_: React.ChangeEvent<unknown>, page: number) => {
      if (profilePage) {
        navigate(`/profile/${profilePage}/${page}`)
      } else {
        navigate(`/${page}`)
      }
        
    }
  return (
    <div className={styles.pagination}>
      {count && <Pagination 
        count={profilePage? Math.ceil(count / 5) : Math.ceil(count / 10)} 
        page={newId ? newId : 1} 
        variant="outlined" 
        shape="rounded"
        onChange={pageChange} />}
    </div>
  );
}