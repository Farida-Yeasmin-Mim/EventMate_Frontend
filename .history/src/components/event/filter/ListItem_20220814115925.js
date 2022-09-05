import React from 'react';
import '../../event/filter/ListItem.css';
import Button from '@mui/material/Button';
import { CartState } from '../../context/Context';


const ListItem = ({ 
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating },}) => {
  const {
    state: {cart},
    dispatch,
  } = CartState();

  return(
      <div className="listItem-wrap">
    
   {/* List images */}
  {/* <img src={coverSrc} alt="item" /> */}
    {/* <img src={require(coverSrc)} alt="item" /> */}
    <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"/>


    {/* Header */}
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>


    {/* Footer */}
    <footer>
      <p><b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span></p>
      <p><b>${price}</b></p>

      {
        cart.some(p=>p.id===item.id)?(
          <Button variant='contained' color='primary'>Remove</Button>
        ):(
          <Button variant='contained' color='primary'>Add</Button>
        )
      }
      
    </footer>
    
  </div>
    )
  
  };

export default ListItem;