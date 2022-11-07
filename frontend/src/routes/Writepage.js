import React from "react";
import Navbar from "../component/Navbar";
import "../static/css/writepage.css";

function Writepage(props) {
    return (
        <>
            
                <Navbar />
                <div className="writ_con">
                <div className="writepage_container_container">

                        <div className="write_logo">
                            클럽모집글쓰기
                        </div>

                        <div className="write_content">
                            <div className="write_title">

                               <input 
                               type="text"
                               className="wri_title"
                               placeholder="제목을 입력해주세요." />

                               <div>카테고리 선택</div>
    
                            </div>

                            

                            <div className="write_intro">
                                <input 
                                type="text"
                                className="wri_title"
                                placeholder="클럽 한줄소개를 입력해주세요." />
                            </div>

                            <section className="wri_detail">
                                <div className="write_date">
                                    <img src="images/postpage_calender.png" className="post_icon" alt=""/>
                                    <input 
                                    type="text"
                                    className="wri_deadline"
                                    placeholder="2022.00.00" />

                                    <div>-</div>                     

                                    <input 
                                    type="text"
                                    className="wri_deadline"
                                    placeholder="2022.00.00" />
                                </div>

                                <img src="images/post_picture.png" className="post_icon" alt=""/>
                                <div>대표사진 추가부분</div>

                                
                            </section>

                            <div
                                className="write_box">
                                    <div className="write_box_title">클럽소개</div>
                                    <input 
                                    type="text"
                                    className="wri_box_box"
                                    placeholder="함께할 사람들을 모집할 수 있도록 클럽을 통해 달성하고자 하는 목표를 적어주세요." />
                            </div>

                            <div
                                className="write_box">
                                    <div className="write_box_title">인증방법</div>
                                    <input 
                                    type="text"
                                    className="wri_box_box"
                                    placeholder="함께 지켜나갈 규칙이 되는 구체적인 인증방법을 적어주세요.
                                    ex) 일주일에 한번 EX포스트 올리기 / 하루달성률 60% 넘기기" />
                            </div>

                            <div className="write_enroll">
                                <button className="enroll_btn">
                                    등록하기
                                </button>
                            </div>

                        </div>

                    </div>

                    </div>
            
        </>
    );
}

export default Writepage;
