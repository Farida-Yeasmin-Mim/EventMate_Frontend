import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartState } from '../context/Context';

function ServiceDetails(props) {
    const [details, setDetails] = useState([]);
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
            <h1>{details.title}</h1>
            <p>Price: ${details.price}</p>
            {/* <p>{details.description}</p> */}
        </div>
    );
}

export default ServiceDetails;