import React, { useEffect } from "react";
import styled from "styled-components";
import Club_introduce from "../component/Club_introduce";
import Navbar from "../component/Navbar";
import "../static/css/grid.css";
import style from "../static/css/post_list.module.css";
import { useState } from "react";
function Post_list_page() {
    const [selected_nav, setselected_nav] = useState(0);
    useEffect(() => {
        console.log(selected_nav);
    }, [selected_nav]);
    const category_list = ["hobby", "study", "life", "exercise", "etc"];
    return (
        <>
            <Navbar />
            <div className="post_list_container container">
                <div className="post_list_item">
                    <div className={style.club_list}>
                        <section
                            className={style.nav_list}
                            onClick={() => {
                                setselected_nav(0);
                            }}
                        >
                            취미/교양
                        </section>
                        <hr />
                        <section
                            className={style.nav_list}
                            onClick={() => {
                                setselected_nav(1);
                            }}
                        >
                            스터디
                        </section>
                        <hr />
                        <section
                            className={style.nav_list}
                            onClick={() => {
                                setselected_nav(2);
                            }}
                        >
                            일상
                        </section>
                        <hr />
                        <section
                            className={style.nav_list}
                            onClick={() => {
                                setselected_nav(3);
                            }}
                        >
                            운동
                        </section>
                        <hr />
                        <section
                            className={style.nav_list}
                            onClick={() => {
                                setselected_nav(4);
                            }}
                        >
                            기타
                        </section>
                    </div>
                </div>
                {club_list
                    .filter((club) => club.category === category_list[selected_nav])
                    .map((club) => (
                        <Club_introduce
                            id={club.id}
                            title={club.name}
                            content={club.content}
                            category={club.category}
                            date={club.date}
                            howto={club.howto}
                            created_at={club.created_at}
                            updated_at={club.updated_at}
                            post={club.post}
                            user={club.user}
                        />
                    ))}
            </div>
        </>
    );
}

export default Post_list_page;

const club_list = [
    {
        id: 1,
        name: "club1",
        content: "content1",
        category: "study",
        date: "2022-10-09",
        howto: "howto1",
        created_at: "2022-10-10T13:34:14.490223",
        updated_at: "2022-10-10T13:34:14.494450",
        post: null,
        user: [],
    },
    {
        id: 2,
        name: "club2",
        content: "content2",
        category: "hobby",
        date: "2022-10-30",
        howto: "howto2",
        created_at: "2022-10-10T13:43:50.059892",
        updated_at: "2022-10-10T13:43:50.059910",
        post: null,
        user: [],
    },
    {
        id: 3,
        name: "club2",
        content: "content2",
        category: "exercise",
        date: "2022-10-30",
        howto: "howto2",
        created_at: "2022-10-10T13:43:50.059892",
        updated_at: "2022-10-10T13:43:50.059910",
        post: null,
        user: [],
    },
    {
        id: 4,
        name: "club2",
        content: "content2",
        category: "etc",
        date: "2022-10-30",
        howto: "howto2",
        created_at: "2022-10-10T13:43:50.059892",
        updated_at: "2022-10-10T13:43:50.059910",
        post: null,
        user: [],
    },
    {
        id: 5,
        name: "club2",
        content: "content2",
        category: "life",
        date: "2022-10-30",
        howto: "howto2",
        created_at: "2022-10-10T13:43:50.059892",
        updated_at: "2022-10-10T13:43:50.059910",
        post: null,
        user: [],
    },
    {
        id: 6,
        name: "club2",
        content: "content2",
        category: "hobby",
        date: "2022-10-30",
        howto: "howto2",
        created_at: "2022-10-10T13:43:50.059892",
        updated_at: "2022-10-10T13:43:50.059910",
        post: null,
        user: [],
    },
    {
        id: 7,
        name: "club2",
        content: "content2",
        category: "hobby",
        date: "2022-10-30",
        howto: "howto2",
        created_at: "2022-10-10T13:43:50.059892",
        updated_at: "2022-10-10T13:43:50.059910",
        post: null,
        user: [],
    },
    {
        id: 8,
        name: "club2",
        content: "content2",
        category: "hobby",
        date: "2022-10-30",
        howto: "howto2",
        created_at: "2022-10-10T13:43:50.059892",
        updated_at: "2022-10-10T13:43:50.059910",
        post: null,
        user: [],
    },
    // {
    //     id: 9,
    //     name: "club2",
    //     content: "content2",
    //     category: "hobby",
    //     date: "2022-10-30",
    //     howto: "howto2",
    //     created_at: "2022-10-10T13:43:50.059892",
    //     updated_at: "2022-10-10T13:43:50.059910",
    //     post: null,
    //     user: [],
    // },
    // {
    //     id: 10,
    //     name: "club2",
    //     content: "content2",
    //     category: "hobby",
    //     date: "2022-10-30",
    //     howto: "howto2",
    //     created_at: "2022-10-10T13:43:50.059892",
    //     updated_at: "2022-10-10T13:43:50.059910",
    //     post: null,
    //     user: [],
    // },
];
