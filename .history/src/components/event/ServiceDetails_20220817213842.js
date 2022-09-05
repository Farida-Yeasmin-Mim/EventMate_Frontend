import React from 'react';
import { useParams } from "react-router-dom";
import { CartState } from '../../context/Context';
import { useEffect, useState } from 'react'

const [details, setDetails] = useState([]);
const { id } = useParams();
const { state: { products, cart } } = CartState();

useEffect(() => {
    const getDetails = cart.map((item) => {
        if (item.id === id) {
            setDetails(item);
        }
    });
}, [id]);

function ServiceDetails(props) {




    return (
        <h1>{details.title}<h1 />
            )



};

            export default ServiceDetails;

