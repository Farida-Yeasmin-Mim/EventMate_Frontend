import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartState } from '../context/Context';
import './ProductDetails.css'
import Button from '@mui/material/Button';
import CartSide from '../event/filter/CartSide';
import { Divider } from '@mui/material';
import { Link } from "react-router-dom";

function DecorationDetails(props) {

    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const { state: { products, cart }, dispatch } = CartState();

    useEffect(() => {
        console.log(id);
        // const getDetails = products.map((item) => {
        //     if (item.id === id) {
        //         console.log('item');
        //         return setDetails(item);
        //     }
        // });
        const thisProduct = products.find(prod => prod.id == id)
        setDetails(thisProduct);
    }, [id]);

    return (
        <>

            <div className="app">
                <div className="details" >
                    <div className="big-img">
                        <img src={details.coverSrc} />
                    </div>


                    <div className="box">
                        <div className="row">
                            <h2>{details.title}</h2>
                            <span>৳{details.price}</span>
                        </div>

                        {/* <Colors colors={details.colors} /> */}

                        <p>{details.description}</p>
                        {/* <p>{details.content}</p> */}

                        {/* <DetailsThumb images={details.src} tab={this.handleTab} myRef={this.myRef} /> */}

                        {
                            cart.some(p => p.id === details.id) ? (
                                <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: details,
                                        })
                                    }
                                >
                                    Remove from Cart
                                </Button>
                            ) : (
                                <Button
                                    variant='contained'
                                    onClick={() =>
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: details,
                                        })
                                    }
                                >
                                    Add to Cart
                                </Button>
                            )
                        }
                        <br />
                        <Divider variant="middle" />
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'rgb(36, 87, 255)' }} to={"/filterpage"}>Go back to Filter Page</Link>

                        <CartSide />


                    </div>

                </div >
            </div >
        </>

    );
}

export default DecorationDetails;