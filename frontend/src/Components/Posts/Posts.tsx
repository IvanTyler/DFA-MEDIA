import React from "react";
import { useGetData } from "../../Hooks/useGetData";
import { IPost } from "../../Interfaces/interface";
import List from "../List/List";
import { PostsItem } from "../PostsItem/PostsItem";
import style from './Posts.module.scss'


export const Posts: React.FC = () => {
    const { posts } = useGetData()

    return (
        <section className={style.sectionPosts}>
            <ul className={style.sectionPostsList}>
                <List
                    items={posts}
                    renderItem={(post: IPost) => <PostsItem post={post} key={post.id} />}
                />
            </ul>
        </section>
    )
}