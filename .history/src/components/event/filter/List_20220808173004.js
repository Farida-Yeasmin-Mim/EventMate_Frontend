import React from 'react'
//import DecorationCard from '../../cards/Decoration';
import ListItem from './ListItem';
import '../../event/filter/List.css';


const List = ({ list }) => {
  return (
    <div className='list-wrap'>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default List
