import React from "react";
import "../static/css/login.css";

function Signup(props) {
    return (
        <>
            
            <div className="login_container_container">
                
                <section className="login_logo">
                    <div className="login_big_logo">
                        TGT
                    </div>
                    <div className="login_small_logo">
                        To Gather, Togather
                    </div>
                </section>

                <section className="login_container">
                    <div className="login_name_choice">
                        <div className="login_name_2">
                            로그인
                        </div>

                        <div className="signup_name_2">
                            회원가입
                        </div>
                    </div>

                    <div className="login_box">
                        <div className="login_input">
                            <div className="login_id">
                                <img src="images/login_id_icon.png" className="loginpage_icon" alt=""/>
                                <input type="text"
                                 className="input"
                                 placeholder="아이디" 
                                />
                            </div>
                          
                            <div className="login_pwd">
                                <img src="images/login_pwd_icon.png" className="loginpage_icon" alt=""/>
                                <input type="text"
                                 className="input"
                                 placeholder="비밀번호"
                                />
                            </div>

                            <div className="login_pwd">
                                <img src="images/signup_email_icon.png" className="loginpage_icon" alt=""/>
                                <input type="text"
                                 className="input"
                                 placeholder="이메일"
                                />
                            </div>
                          

                        </div>

                        <div className="login_btn_btn">
                            <button className="login_btn">
                                회원가입
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Signup;

