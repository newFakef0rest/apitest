import { Link } from "react-router-dom";
import { TComment, TProducts } from "../../types/types"
import styles from './UserInfo.module.scss';

type TUserInfoProps = {
    article: TProducts | TComment,
    className?: string
}

export const UserInfo = ({article, className} : TUserInfoProps) => {
  return (
    <div className={`${styles.user} ${className}`}>
        <div className="banner__user_logo">
            <Link to={`/profile/${article.author.username}`}>
                <img src={article.author.image} alt="" />
            </Link>
        </div>
        <div className={styles.user__info}>
            <Link to={`/profile/${article.author.username}`}>
                <p>{article.author.username}</p>
            </Link>
            <Link to={`/profile/${article.author.username}`}>
                <span>{new Date(article.createdAt).toDateString()}</span>
            </Link>
        </div>
    </div>
  )
}