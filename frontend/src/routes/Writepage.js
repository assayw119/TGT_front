import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import '../static/css/writepage.css';
import axios from 'axios';

function Writepage(props) {
  const [inputs, setInputs] = useState({
    title: '',
    shortintro: '',
    startdate:'',
    enddate:'',
    photo:'',
    clubintro:'',
    confirm:'',
  });
  const {name, introduce, start_date, end_date, content, category, howto}= inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }; 
  const [image, setImage] = useState('');
  useEffect(() => {
    console.log(image);
  }, [image]);
  const addImage = e => {
    const images = e.target.files;
    const ImageURL = URL.createObjectURL(images[0]);
    setImage(ImageURL);
  };
  useEffect(() => {
    // console.log(inputs);
  }, [inputs]);
  

  const post_write = async () => {
    try {
      await axios
        .post('http://127.0.0.1:8000/club/', inputs)
        .then(res => {
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
                name="name"
                value={name}
                onChange={onChange}
              />

              <select className="select" name="category" value={category} onChange={onChange}>
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
                name="introduce"
                value={introduce}
                onChange={onChange}
              />
            </div>

            <section className="wri_detail">
              <div className="write_date">
                <img
                  src="images/postpage_calender.png"
                  className="post_icon"
                  alt=""
                />
                <input 
                  type="date" 
                  className="wri_deadline" 
                  name="start_date"
                  value={start_date}
                  onChange={onChange}
                />

                <div>-</div>

                <input
                 type="date"
                 className="wri_deadline"
                 name="end_date"
                 value={end_date}
                 onChange={onChange}
                 />
              </div>

              <img src="images/post_picture.png" className="post_icon" alt="" />
              <label className="input-file-button" for="input-file">
                대표사진 추가
              </label>
                <input
                type="file"
                accept="image/*"
                name="image"
                id="input-file"
                style={{ display: 'none' }}
                onChange={addImage}
                />
            </section>

            <div className="write_box">
              <div className="write_box_title">클럽소개</div>
              <input
                type="text"
                className="wri_box_box"
                name="content"
                value={content}
                onChange={onChange}
                placeholder="함께할 사람들을 모집할 수 있도록 클럽을 통해 달성하고자 하는 목표를 적어주세요."
              />
            </div>

            <div className="write_box">
              <div className="write_box_title">인증방법</div>
              <input
                type="text"
                className="wri_box_box"
                name="howto"
                value={howto}
                onChange={onChange}
                placeholder="함께 지켜나갈 규칙이 되는 구체적인 인증방법을 적어주세요.
                                    ex) 일주일에 한번 EX포스트 올리기 / 하루달성률 60% 넘기기"
              />
            </div>

            <div className="write_enroll">
              <button className="enroll_btn" onClick={post_write}>등록하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Writepage;