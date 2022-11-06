/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Club_introduce from '../component/Club_introduce';
import Navbar from '../component/Navbar';
import '../static/css/grid.css';
import style from '../static/css/post_list.module.css';
import { useState } from 'react';
function PostListPage() {
  const [selected_nav, setselected_nav] = useState(0);
  useEffect(() => {
    console.log(selected_nav);
  }, [selected_nav]);
  const category_list = ['취미/교양', '스터디', '일상', '운동', '기타'];
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
              style={
                selected_nav == 0
                  ? { backgroundColor: '#FFE8C6', borderRadius: `10px` }
                  : null
              }
            >
              취미/교양
            </section>
            <hr />
            <section
              className={style.nav_list}
              onClick={() => {
                setselected_nav(1);
              }}
              style={
                selected_nav == 1
                  ? { backgroundColor: '#FFE8C6', borderRadius: `10px` }
                  : null
              }
            >
              스터디
            </section>
            <hr />
            <section
              className={style.nav_list}
              onClick={() => {
                setselected_nav(2);
              }}
              style={
                selected_nav == 2
                  ? { backgroundColor: '#FFE8C6', borderRadius: `10px` }
                  : null
              }
            >
              일상
            </section>
            <hr />
            <section
              className={style.nav_list}
              onClick={() => {
                setselected_nav(3);
              }}
              style={
                selected_nav == 3
                  ? { backgroundColor: '#FFE8C6', borderRadius: `10px` }
                  : null
              }
            >
              운동
            </section>
            <hr />
            <section
              className={style.nav_list}
              onClick={() => {
                setselected_nav(4);
              }}
              style={
                selected_nav == 4
                  ? { backgroundColor: '#FFE8C6', borderRadius: `10px` }
                  : null
              }
            >
              기타
            </section>
          </div>
        </div>
        {club_list
          .filter(club => club.category === category_list[selected_nav])
          .map(club => (
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
              intro={club.introduce}
            />
          ))}
      </div>
    </>
  );
}

export default PostListPage;

const club_list = [
  {
    id: 1,
    name: '헬린이들',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content1',
    category: '운동',
    date: '2022-10-09',
    howto: 'howto1',
    created_at: '2022-10-10T13:34:14.490223',
    updated_at: '2022-10-10T13:34:14.494450',
    post: 'images/temp/image-1.png',
    user: [],
  },
  {
    id: 2,
    name: '클라이밍에 진심인 사람들',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: '매주 1회씩 ',
    category: '운동',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-2.png',
    user: [],
  },
  {
    id: 3,
    name: '마라마라톤',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '운동',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-3.png',
    user: [],
  },
  {
    id: 4,
    name: '런닝맨 앤 우먼',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '운동',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-4.png',
    user: [],
  },
  {
    id: 5,
    name: '아코 필라테스',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '운동',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-5.png',
    user: [],
  },
  {
    id: 6,
    name: '이번 겨울엔 바프',
    content: 'content2',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    category: '운동',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-6.png',
    user: [],
  },
  {
    id: 7,
    name: '한강, 같이 뛰어요!',
    content: 'content2',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    category: '운동',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image.png',
    user: [],
  },
  {
    id: 8,
    name: '헬린이~',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '운동',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-1.png',
    user: [],
  },
  {
    id: 9,
    name: 'club2',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '취미/교양',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-1.png',
    user: [],
  },
  {
    id: 10,
    name: 'club2',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '취미/교양',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-1.png',
    user: [],
  },
  {
    id: 11,
    name: 'club1',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content1',
    category: '스터디',
    date: '2022-10-09',
    howto: 'howto1',
    created_at: '2022-10-10T13:34:14.490223',
    updated_at: '2022-10-10T13:34:14.494450',
    post: 'images/temp/image-1.png',
    user: [],
  },
  {
    id: 12,
    name: '클라이밍에 진심인 사람들',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: '매주 1회씩 ',
    category: '취미/교양',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-2.png',
    user: [],
  },
  {
    id: 13,
    name: 'club2',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '취미/교양',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-3.png',
    user: [],
  },
  {
    id: 14,
    name: 'club2',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '기타',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-4.png',
    user: [],
  },
  {
    id: 15,
    name: 'club2',
    introduce: '매주1회씩 자유롭게 뛰고 인증해요!',
    content: 'content2',
    category: '일상',
    date: '2022-10-30',
    howto: 'howto2',
    created_at: '2022-10-10T13:43:50.059892',
    updated_at: '2022-10-10T13:43:50.059910',
    post: 'images/temp/image-5.png',
    user: [],
  },
];
