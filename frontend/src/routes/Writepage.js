import React from "react";
import Navbar from "../component/Navbar";


function Writepage(props) {
    return (
        <>
            <div>
                <Navbar />
                <div className="writepage_container container">
                    <div className="writepage_item">
                        <div className="write_logo">클럽모집글쓰기</div>
                        <div className="write_content">
                            <section
                                className="write_title"
                                style={{
                                    backgroundColor: "#E9E9E9", borderRadius: `10px`,
                                    Color:"#949494", placeholder: "제목을 입력해주세요."
                                }}
                            >
                            </section>

                            <section
                                className="write_title"
                                style={{
                                    backgroundColor: "#E9E9E9", borderRadius: `10px`,
                                    Color:"#949494", placeholder: "클럽 한줄 소개를 입력해주세요."
                                }}
                            >
                            </section>

                            <section className="write_date">
                                <div className="write_date_icon">icon 넣기</div>
                                <div 
                                className="write_date_startnum" 
                                style={{
                                    backgroundColor: "#E9E9E9", borderRadius: `10px`,
                                    Color: "#000000", placeholder:"2022.00.00"}}>
                                </div>

                                <div 
                                className="write_date_endnum" 
                                style={{
                                    backgroundColor: "#E9E9E9", borderRadius: `10px`,
                                    Color: "#000000", placeholder:"2022.00.00"}}>
                                </div>
                            </section>

                            <section className="write_img">
                                대표 사진 추가 부분 ...
                            </section>

                            <section
                                className="write_box">
                                    <div className="write_box_title">클럽소개</div>
                                    <div
                                    className="write_box_box"
                                    style={{
                                    backgroundColor: "#E9E9E9", borderRadius: `10px`,
                                    Color:"#949494", placeholder:"함께할 사람들을 모집할 수 있도록 클럽을 통해 달성하고자 하는 목표를 적어주세요."}}>
                                    </div>
                            </section>

                            <section
                                className="write_box">
                                    <div className="write_box_title">인증방법</div>
                                    <div
                                    className="write_box_box"
                                    style={{
                                    backgroundColor: "#E9E9E9", borderRadius: `10px`,
                                    Color:"#949494", placeholder:"함께 지켜나갈 규칙이 되는구체적인 인증방법을 적어주세요. ex) 일주일에 한번 EX포스트 올리기 / 하루달성률 60% 넘기기."}}>
                                    </div>
                            </section>

                            <section className="write_enroll">등록하기</section>

                        </div>

                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Writepage;
