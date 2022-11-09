import React from 'react';
import Navbar from '../component/Navbar';
import '../static/css/writepage.css';

function Writepage(props) {
  return (
    <>
      <Navbar />
      <style>
        {`.postlist,.clubpage,.mainpage{opacity:0.2}
      `}
      </style>
      <div className="container">
        <div className="writepage_container_container">
          <div className="write_logo">클럽모집글쓰기</div>

          <div className="write_content">
            <div className="write_title">
              <input
                type="text"
                className="wri_title"
                placeholder="제목을 입력해주세요."
              />

              <select className="select">
                <option disabled selected>
                  카테고리 선택
                </option>
                <option value="0">취미/교양</option>
                <option value="1">스터디</option>
                <option value="2">일상</option>
                <option value="3">운동</option>
                <option value="4">기타</option>
              </select>
            </div>

            <div className="write_intro">
              <input
                type="text"
                className="wri_title_2"
                placeholder="클럽 한줄소개를 입력해주세요."
              />
            </div>

            <section className="wri_detail">
              <div className="write_date">
                <img
                  src="images/postpage_calender.png"
                  className="post_icon"
                  alt=""
                />
                <input type="date" className="wri_deadline" />

                <div>-</div>

                <input type="date" className="wri_deadline" />
              </div>

              <img src="images/post_picture.png" className="post_icon" alt="" />
              <label className="input-file-button" for="input-file">
                대표사진 추가
              </label>
              <input
                type="file"
                accept="image/*"
                id="input-file"
                style={{ display: 'none' }}
              />
            </section>

            <div className="write_box">
              <div className="write_box_title">클럽소개</div>
              <input
                type="text"
                className="wri_box_box"
                placeholder="함께할 사람들을 모집할 수 있도록 클럽을 통해 달성하고자 하는 목표를 적어주세요."
              />
            </div>

            <div className="write_box">
              <div className="write_box_title">인증방법</div>
              <input
                type="text"
                className="wri_box_box"
                placeholder="함께 지켜나갈 규칙이 되는 구체적인 인증방법을 적어주세요.
                                    ex) 일주일에 한번 EX포스트 올리기 / 하루달성률 60% 넘기기"
              />
            </div>

            <div className="write_enroll">
              <button className="enroll_btn">등록하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Writepage;
