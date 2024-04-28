import { TComment } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import styles from './Comment.module.scss';

type TCommentProps = {
  comment: TComment,
  className: string
}

export const Comment = ({comment, className} : TCommentProps) => {
  return (
    <li className={`${styles.comment} ${className}`}>
      <div className={styles.comment__text}>
          <p>{comment.body}</p>
      </div>
      <div className={styles.comment__user}>
          <UserInfo comment={comment}/>
      </div>
    </li>
  )
}