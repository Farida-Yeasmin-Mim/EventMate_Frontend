import React from 'react'
import FilterListToggle from '../../event/Photography/FilterListToggle';
import { ratingList } from '../../event/Photography/constants';
import '../../event/filter/FilterPanel.css';
import CheckboxProton from './CheckboxProton';
import SliderProton from './SliderProton';


const FilterPanel = ({
  selectedRating,
  selectRating,

  decorations,
  changeChecked,
  
  changePrice,
  selectedPrice,
}) => {

  return (
    <div>


      {/* Decoration */}
      <div className="input-group">
        <p className="label"> Photography </p>
        {decorations.map((decoration) => (
          <CheckboxProton
            key={decoration.id}
            decoration={decoration}
            changeChecked={changeChecked}
          />
        ))}
      </div>


      {/* Price Range */}
      <div className="input-group">
        <p className="label-range">Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>



      {/* Star Rating */}
      <div className="input-group">
        <p className="label"> Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating} />
      </div>



    </div>
  )
}

export default FilterPanel