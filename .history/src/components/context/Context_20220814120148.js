import React, { createContext, useReducer  } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';
import { dataList } from '../event/filter/constants';

const Cart = createContext();

function Context({childern}) {
    // const products = [...Array(20)].map(() => ({
    //     id: faker.datatype.uuid(),
    //     name: faker.commerce.productName(),
    //     price: faker.commerce.price(),
    //     image: faker.image.fashion(),
    //     inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    //     fastDelivery: faker.datatype.boolean(),
    //     ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    //   }));
    const products = dataList;

      console.log(products);
      const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
      });
    
      
    return (
        <Cart.Provider value={{state, dispatch}}>
            {childern}
        </Cart.Provider>
    );
}

export const CartState = () => {
  return <div></div>;
};

export default Context;