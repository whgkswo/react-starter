import MobileHeader from "../../components/MobileHeader";
import '../../style/Components.css';

function WelcomeText(){
    return (
        <div className="welcome-text">
            <h2>만나서 반가워요</h2>
            <h2>회원가입을 진행할게요</h2>
        </div>
    );
}
function RegisterInput(props){
    return (
        <div className="register-input-container">
            <h2 className="register-input-title">{props.title}</h2>
            <textarea className='register-input' placeholder={props.placeholder}></textarea>
            <button className="register-dupl-button">중복 확인</button>
        </div>
    );
}
function PasswordInput(){
    return (
        <div className="register-input-container">
            <h2 className="register-input-title">비밀번호</h2>
            <textarea className='register-input' placeholder='비밀번호를 입력해주세요'></textarea>
            <textarea className='password-input' placeholder='비밀번호를 입력해주세요'></textarea>
        </div>
    );
}
function Registration(){
    return (
        <div className="mobile-background">
            <div className="mobile-background-black"></div>
            <div className="mobile-background-white">
                <MobileHeader></MobileHeader>
                <WelcomeText></WelcomeText>
                <RegisterInput title='이메일' placeholder='이메일을 입력해주세요'></RegisterInput>
                <RegisterInput title='닉네임' placeholder='닉네임을 입력해주세요'></RegisterInput>
                <PasswordInput></PasswordInput>
                <button className="registration-button">회원 가입</button>
            </div>
            <div className="mobile-background-black"></div>
        </div>
    );
}
export default Registration;