import { IPost } from "../../Interfaces/interface";
import style from './PostsItem.module.scss'

interface PostsItemProps {
    post: IPost,
}

export const PostsItem: React.FC<PostsItemProps> = ({ post }) => {
    console.log(post.users);

    return (
        <li className={post.active ? style.sectionPostsList__item + ' ' + style.active : style.sectionPostsList__item}>
            <div className={style.sectionPostsList__dataUser}>
                <div className={style.sectionPostsList__top}>
                    <span className={style.sectionPostsList__paymentLevel}>
                        {post.paymentLevel}
                    </span>
                    <span className={style.sectionPostsList__activePartners}>
                        {post.activePartners}
                    </span>
                </div>

                <div className={style.sectionPostsList__bottom}>
                    <span className={style.sectionPostsList__title + ' ' + style.paymentLevel}>
                        Уровень выплат
                    </span>
                    <span className={style.sectionPostsList__title + ' ' + style.activePartners}>
                        Активных партнёров
                    </span>
                </div>
            </div>

            <ul className={style.sectionPostsList__userList}>
                {post.users.length ?
                    post.users.map((item) => {
                        return <li className={style.sectionPostsList__userItem} key={item.id}>
                            <img className={item.active ? style.sectionPostsList__userAvatar + ' ' + style.active : style.sectionPostsList__userAvatar} src={`${item.avatar}`} alt={item.name} />
                            <span className={style.sectionPostsList__userName}>{item.name}</span>
                        </li>
                    }) : <p>Список отсутствует</p>
                }
            </ul>
        </li>
    )
}