import React from 'react';
import '../../event/filter/ListItem.css';
import Button from '@mui/material/Button';
import { CartState } from '../../context/Context';
import StarIcon from '@mui/icons-material/Star';


const ListItem = ({
  item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="listItem-wrap">

      {/* List images */}
      {/* <img src={coverSrc} alt="item" /> */}
      {/* <img src={require(coverSrc)} alt="item" /> */}
      <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" />


      {/* Header */}
      <header>
        <h4>{item.title}</h4>
        <span><StarIcon className="star" /><span>{item.rating}</span></span><br />
        <h4>{item.title}</h4>
        <span><StarIcon className="star" /><span>{item.rating}</span></span>
      </header>


      {/* Footer */}
      <footer>
        <div>
          <p><b>${item.price}</b></p>
          <p>{item.serviceTime} <span> needed to build</span></p>
          <p><span>3 reviews</span></p>
        </div>


        {
          cart.some(p => p.id === item.id) ? (
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
              Selected
            </Button>
          ) : (
            <Button


              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
            >
              <b>View</b>
            </Button>
          )
        }

      </footer>

    </div>
  )

};

export default ListItem;