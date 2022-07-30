import React from 'react'
import DecorationCard from '../../cards/decoration';
import '../../event/filter/List.css';
import ListItem from './ListItem';


const List = ({ list }) => {
  return (
    <div classNmae="list-wrap">
      {/* {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))} */}
      <DecorationCard/>
      <DecorationCard/>
      <DecorationCard/>
      <DecorationCard/>
      <DecorationCard/>

    </div>
  )
}

export default List
