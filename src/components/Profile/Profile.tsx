import { observer } from "mobx-react-lite";
import order from "../../store/order";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Error } from "../Error/Error";
import { Loader } from "../Loader/Loader";
import styles from './Profile.module.scss';
import { Divider } from "@mui/material";
import { Comments } from "../Comments/Comments";


function Profile(){
  const {profId} = useParams<{profId: string}>();

  if (!profId) {
    return <Error />
  }

  useEffect(() => {
    order.addOne(profId)
    order.loadComments(profId)
  }, [profId])

  if (order.product?.state === 'rejected') {
    return <Error />
  }

  if (order.product?.state === 'pending') {
    return <Loader/>
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className={styles.profile}>
            <p>{order.product?.value.article.body}</p>
            
            <Divider variant="inset" component="li" sx={{ marginLeft: 0, paddingBottom: '20px   '}} />

          </div>
        </div>
      </div>
      <Comments />
    </>

  )
}

export default observer(Profile);