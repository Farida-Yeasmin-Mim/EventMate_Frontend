import React from 'react';
import { useParams } from "react-router-dom";
import { CartState } from '../../context/Context';
import React, { useEffect, useState } from 'react'

function ServiceDetails(props) {
    const details, setDetails = useState([]);
    const { id } = useParams();
    const { state: { products, cart } } = CartState();

    useEffect(() => {
        const getDetails = cart.map((item) => {
            if (item.id === id) {
                return setDetails(item);
            }
        });
    }, [id]);

    return (
        <div>
            <h1>{details.title}<h1 />
        </div>
    );
}

export default ServiceDetails;

