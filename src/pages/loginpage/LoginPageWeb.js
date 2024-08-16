import styled from "styled-components";

const Logo = styled.img`
    width: 150px;
    height: 50px;
`;
const MyPageIcon = styled.img`
    width: 100px;
    height: 100px;
`;

function LoginPage(){
    return (
        <div id="login-header">
            <Logo src="meetbti.png" id="logo"></Logo>
            <MyPageIcon src="mypage-icon.png" id='mypage-icon'></MyPageIcon>
        </div>
    );
}
export default LoginPage;