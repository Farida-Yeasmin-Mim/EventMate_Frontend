import React from 'react';
import '../../event/filter/ListItem.css';
import Button from '@mui/material/Button';
import { CartState } from '../../context/Context';


const ListItem = ({ 
  item}) => {
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
      <h4>{item.title}</h4>
      <span>🌟{item.rating}</span>
    </header>


    {/* Footer */}
    <footer>
      <p><b>{item.serviceTime}</b> <span> Delivery Fee ${item.deliveryFee}</span></p>
      <p><b>${item.price}</b></p>

      {
        cart.some(p=>p.id===id)?(
          <Button 
          variant='contained' 
          color='primary'
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item,
            })
          }
          >
            Remove
          </Button>
        ):(
          <Button 
          variant='contained' 
          color='primary'
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            })
          }
          >
            Add
          </Button>
        )
      }
      
    </footer>
    
  </div>
    )
  
  };

export default ListItem;