import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartState } from '../context/Context';

function setDetails() {

}

function ServiceDetails(props) {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const { state: { products, cart } } = CartState();

    useEffect(() => {
        console.log(id);
        // const getDetails = products.map((item) => {
        //     if (item.id === id) {
        //         console.log('item');
        //         return setDetails(item);
        //     }
        // });
        const thisProduct = products.find(prod => prod.id === id)
        console.log(thisProduct);
    }, [id]);

    return (
        <div>
            <h1>{details.title}</h1>
            <p>Price: ${details.price}</p>
        </div>
    );
}

export default ServiceDetails;