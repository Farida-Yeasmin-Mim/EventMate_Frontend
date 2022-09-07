import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartState } from '../context/Context';
import './ProductDetails.css'
import Button from '@mui/material/Button';
import CartSide from '../event/filter/CartSide';
import { Divider } from '@mui/material';
import { Link } from "react-router-dom";
import Colors from './Colors';

function DecorationDetails(props) {

    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const { state: { products, cart }, dispatch } = CartState();
    const colors = ["red", "black", "crimson", "teal"];

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
                            <h2>{details.name}</h2>
                            <span>৳{details.price}</span>
                        </div>


                        <p>Vendor name: {details.vendor}</p>
                        <p>{details.description}</p>
                        <p>Inform Before:{details.serviceTime}</p>
                        <p>Build Time:{details.Build}</p>
                        <p>{details.placement} Decoration</p>
                        <p>Minimum Space needed: {details.space}</p>
                        <p>Maximum Guest: {details.guest}</p>
                        <p>customization: {details.customization}</p>
                        <Colors colors={colors} />
                        {/* <DetailsThumb images={details.src} tab={this.handleTab} myRef={this.myRef} /> */}

                        {
                            cart.some(p => p.id === details.id) ? (
                                <Button
                                    variant='contained'
                                    color='error'
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
                                    color='success'
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
                        <br /><br /><br />
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