import React from "react";
import style from "../static/css/post_list.module.css";

function Club_introduce({
    id,
    title,
    content,
    category,
    date,
    howto,
    created_at,
    updated_at,
    post,
    user,
}) {
    return (
        <>
            <div className="post_list_item">
                <section className={style.club_category}>{category}</section>
                {/* <section>{id}</section> */}
                <section className={style.club_title}>{title}</section>
                <section>{content}</section>
                <section>{date}</section>
                <section>{howto}</section>
                <section>{created_at}</section>
                <section>{updated_at}</section>
                <section>{post}</section>
                <section>{user}</section>
            </div>
        </>
    );
}

export default Club_introduce;
