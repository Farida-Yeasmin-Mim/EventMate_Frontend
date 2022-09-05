import React from 'react';
import { CartState } from '../../context/Context';

const FilterPage = (props) =>{
    const {state} = CartState();
  console.log(state);
    return (
        <div>
            
        </div>
    );
}

export default FilterPage;