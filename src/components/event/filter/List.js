import React from 'react'
import ListItem from './ListIltem';
import '../../event/filter/List.css';


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
