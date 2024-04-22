import Pagination from '@mui/material/Pagination';

type Tprops = {
    count?: number,
    newId: number
}

export default function PaginationRounded({count, newId} : Tprops) {
    const pagChange = (event: React.ChangeEvent<unknown>, page: any) => {
        console.log(page)
    }
  return (
      <Pagination 
        count={count ? Math.round(count / 10) : 20} 
        page={newId} 
        variant="outlined" 
        shape="rounded"
        onChange={pagChange} />
  );
}