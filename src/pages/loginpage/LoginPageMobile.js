import BackIcon from "../../components/BackIcon.js";
import MobileBackground from "../background/MobileBackground.js";
import Logo from "../../components/Logo.js";
import MobileHeader from "../../components/MobileHeader.js";
import { Link } from "react-router-dom";

function InputContainer(){
    return (
        <div className="input-container">
            <textarea placeholder="이메일을 입력해 주세요" className="login-input"></textarea>
            <textarea placeholder="비밀번호를 입력해 주세요" className="login-input"></textarea>
            <button className="login-button">로그인</button>
        </div>
    );
}
function FindPasswordContainer(){
    return (
        <div className="find-password">
            <button className="find-password-button">비밀번호 찾기</button>
            <Link to='/registration'>
                <button className="find-password-button">회원가입</button>
            </Link>
        </div>
    );
}
function OAuthContainer(){
    return (
        <div>
            <img src="google.png" className="oauth-logo"></img>
            <img src="kakao.png" className="oauth-logo"></img>
            <img src="naver.png" className="oauth-logo"></img>
        </div>
    );
}
function LoginPageMobile(){
    return (
        <div className="mobile-background">
            <div className="mobile-background-black"></div>
            <div className="mobile-background-white">
                <MobileHeader></MobileHeader>
                <Logo></Logo>
                <InputContainer></InputContainer>
                <FindPasswordContainer></FindPasswordContainer>
                <h2 className="or">ㅡㅡㅡㅡㅡㅡㅡㅡ 또는 ㅡㅡㅡㅡㅡㅡㅡㅡ</h2>
                <OAuthContainer></OAuthContainer>
                <h2 className="right">MeetBTI All Rights Reserved</h2>
            </div>
            <div className="mobile-background-black"></div>
        </div>
    );
}
export default LoginPageMobile;