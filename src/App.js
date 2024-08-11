import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal(){
  return(
    <>
      <div className='modal'>
        <h4>{/* {title[0]} */}글제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

function Header(){
  return (
    <div className='black-nav'>
        <h4>블로그임</h4>
    </div>
  );
}

function App(){
  const [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  const [likes, setLikes] = useState([0,0,0]);
  const [man, setMan] = useState(true);

  function addLike(index){
    const updatedLike = [...likes];
    updatedLike[index] += 1;
    setLikes(updatedLike);
  }

  function toggleTitle(){
    setMan(prevMan => {
      const newMan = !prevMan;
      const updatedTitle = [...title];
      updatedTitle[0] = newMan ? '남자코트 추천' : '여자코트 추천';
      setTitle(updatedTitle);
      return newMan;
    });
  }

  function sort(){
    const sortedTitle = [...title].sort();
    setTitle(sortedTitle);
    const sortedLikes = [...likes].sort();
    setLikes(sortedLikes);
  }

  return(
    <div className="App">
      <Header></Header>

      {title.map((item, index) => (
        <div className='list' key={index}>
          <h4 style={{fontSize: '20px', display: 'inline'}}>
            {item}
            <span onClick={() => addLike(index)}>❤️</span>
            {likes[index]}
          </h4>
          <p>2월 {17 + index}일 발행</p>
        </div>
      ))}

      <button onClick={sort}>가나다 정렬</button> 
      <Modal></Modal>
    </div>
  );
}

export default App;
