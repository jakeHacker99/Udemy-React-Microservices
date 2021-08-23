import React from 'react'
import CommentCreate from './CommentCreate'
import PostCreate from './PostCreate'
import PostList from './PostList'


const App = () => {
    return (
        <div className="container" >
            <h1>


            Blog App
            </h1>
            <PostCreate/>
            <hr/>
            <PostList/>
            <hr/>
            <CommentCreate/>

            
        </div>
    )
}

export default App
