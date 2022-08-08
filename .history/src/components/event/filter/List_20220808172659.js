import React from 'react'
//import DecorationCard from '../../cards/Decoration';
import ListItem from './ListItem';
import '../../event/filter/List.css';


const List = ({ list }) => {
  return (
    <div classNmae='list-wrap1'>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
      <h1 className='h1cls'>Hello</h1>

    </div>
  )
}

export default List
