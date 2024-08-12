import { useState } from 'react';

function Article(props){
    return <div className='article'>
                <h4 style={{fontSize: '20px'}}>
                    {props.title}
                    <span onClick={() => props.addLike()}>❤️</span>
                    {props.likes}
                </h4>
                <p>{props.content}</p>
            </div>
    
}
export default Article;