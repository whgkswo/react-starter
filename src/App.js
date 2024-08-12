import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Article from './components/Article';

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


  function sort(){
    const sortedArticles = [...articles].sort((a,b) => a.title.localeCompare(b.title));
    setArticles(sortedArticles);
  }

  const [articles, setArticles] = useState(
    [
      {title:'남자코트 추천', content:'2월 17일 발행', likes:0},
      {title:'강남 우동맛집', content:'2월 18일 발행', likes:0},
      {title:'파이썬독학', content:'2월 19일 발행', likes:0}
    ]
  );

  function addLike(index){
    const copy = [...articles];
    copy[index].likes += 1;
    setArticles(copy);
  }

  return(
    <div className="App">
      <Header></Header>

      {articles.map((item, index) => (
        <Article 
          title={item.title}
          content={item.content}
          likes={item.likes}
          addLike={() => addLike(index)}>
        </Article>
      ))}
      <button onClick={sort}>글 정렬</button>
    </div>
  );
}

export default App;
