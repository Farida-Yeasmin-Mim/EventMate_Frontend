import React from 'react'
import '../../event/filter/List.css';
import ListItem from './ListItem';


const List = ({ list }) => {
  return (
    <div classNmae="list-wrap">
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}

    </div>
  )
}

export default List
