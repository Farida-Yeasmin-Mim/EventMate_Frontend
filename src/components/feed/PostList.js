import React from 'react'
import PostItem from './PostItem'



const PostList = ({ list }) => {
  
  return (
    <div>
      {list.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default PostList