import React, { createContext } from 'react';

const Cart = createContext();

function Context({childern}) {
    return (
        <Cart.Provider>
            {childern}
        </Cart.Provider>
    );
}

export default Context;