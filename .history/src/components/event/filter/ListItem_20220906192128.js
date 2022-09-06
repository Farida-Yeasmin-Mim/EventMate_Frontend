import React from 'react';
import '../../event/filter/ListItem.css';
import Button from '@mui/material/Button';
import { CartState } from '../../context/Context';
import StarIcon from '@mui/icons-material/Star';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Link } from "react-router-dom";

const ListItem = ({
  item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="listItem-wrap">

      {/* List images */}
      <img src={item.coverSrc} alt="item" />
      {/* <img src={require(coverSrc)} alt="item" /> */}
      {/* <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" /> */}


      {/* Header */}
      <header>
        <h4>{item.title}</h4>
        <span>
          <StarIcon className="star" /><span>{item.rating}</span>
          <InsertCommentIcon className="review" /><span>{item.rating}</span>
        </span>

      </header>


      {/* Footer */}
      <footer>
        <div>
          <p className="vendorName"><span>Vendor name</span></p>
          <p><b>${item.price}</b></p>
          <p>{item.serviceTime} <span> needed to build</span></p>
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
            // <Button
            //   onClick={() =>
            //     dispatch({
            //       type: "ADD_TO_CART",
            //       payload: item,
            //     })
            //   }
            // >
            //   <b>View</b>
            // </Button>
            <Link style={{ textDecoration: 'none', color: 'rgb(36, 87, 255);' }} to={"/service_details/" + item.id}><b>VIEW</b></Link>
          )
        }

      </footer>

    </div>
  )

};

export default ListItem;

// import React from 'react';
// import '../../event/filter/ListItem.css';


// const ListItem = ({
//   item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
// }) => (

//   <div className="listItem-wrap">

//     {/* List images */}
//     <img src={coverSrc} alt="item" />
//     {/* <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"/> */}


//     {/* Header */}
//     <header>
//       <h4>{title}</h4>
//       <span>🌟{rating}</span>
//     </header>


//     {/* Footer */}
//     <footer>
//       <p><b>{serviceTime}</b> <span> Delivery Fee ৳{deliveryFee}</span></p>
//       <p><b>৳{price}</b></p>
//     </footer>

//   </div>
// );

// export default ListItem;