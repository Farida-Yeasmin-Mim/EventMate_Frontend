import React from 'react';
import { CartState } from '../../context/Context';

const FilterPage = (props) =>{
    const {state} = CartState();
  console.log("ok");
    return (
        <div>
            <h1>helooooo</h1>
        </div>
    );
}

export default FilterPage;