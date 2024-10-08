import { Link } from "react-router-dom";

function LandingPage(){
    return (
        <div>
            <Header></Header>
            <MainBanner></MainBanner>
            <MainContents></MainContents>
            <ImageContainer></ImageContainer>
            <MainFooter></MainFooter>
        </div>
    );
}
function Header(){
    return (
      <div className='header'>
          <img src='meetbti.png'></img>
          <div id='menu-container'>
            <h2>MBTI 테스트</h2>
            <h2>MY MBTI</h2>
            <h2>Snack</h2>
          </div>
          <Link to='/login-m'>
            <img src='mypage-icon.png' id='mypage-icon'></img>
          </Link>
      </div>
    );
  }
  function MainBanner(){
    return (
      <div className='Main'>
        <img src='main.png' id='main-banner'/>
  
        <div className='main-text'>
          <div className='main-large'>
            <div>나만의 MBTI</div>
            <div>최근 나의 성격은</div>
          </div>
          <div className='main-small'>
            <div>나의 MBTI는,</div>
            <div>너의 MBTI는,</div>
            <div>우리의 MBTI는</div>
            <Link to={'/mbti-test'}>
              <button className='test-start'>START!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  function MainContents(){
    return (
      <div className='main-contents'>
        <h6>나와 같은 Meet MBTI!</h6>
      </div>
    );
  }
  function ImageContainer(){
    return (
      <div className='image-container'>
        <img src='person-1.jpg' className='main-person'></img>
        <img src='person-2.jpg' className='main-person'></img>
        <img src='person-3.jpg' className='main-person'></img>
        <img src='person-4.jpg' className='main-person'></img>
        <img src='person-5.jpg' className='main-person'></img>
      </div>
    );
  }
  function FooterList(props){
    return (
      <div>
        <h4>{props.title}</h4>
        <div>
          {props.content.map((item, index) => (
          <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
  function MainFooter(){
    return (
      <footer className='main-footer'>
        <div className='footer-container'>
          <FooterList title='Use cases' content={['UI design', 'UX desingn', 'Wireframing']}></FooterList>
          <FooterList title='Explore' content={['Design', 'Prototyping', 'Development features']}></FooterList>
          <FooterList title='Resources' content={['Blog', 'Best practices', 'Colors']}></FooterList>
        </div>
      </footer>
    );
  }
  
  export default LandingPage;