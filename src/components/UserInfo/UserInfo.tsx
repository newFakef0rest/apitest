import { TComment, TProducts } from "../../types/types"
import styles from './UserInfo.module.scss';

type TUserInfoProps = {
    article?: TProducts,
    comment?: TComment
    className?: string
}

export const UserInfo = ({article, comment, className} : TUserInfoProps) => {
    let item;
    if (article || comment) {
        item = article ? article : comment
    }
  return (
    <div className={`${styles.user} ${className}`}>
        <div className="banner__user_logo">
            <img src={item && item.author.image} alt="" />
        </div>
        <div className={styles.user__info}>
            <p>{item && item.author.username}</p>
            <span>{new Date(item ? item.createdAt : '').toDateString()}</span>
        </div>
    </div>
  )
}