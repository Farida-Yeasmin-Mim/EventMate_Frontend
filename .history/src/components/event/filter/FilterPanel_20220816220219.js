import React from 'react'
import FilterListToggle from '../../event/filter/FilterListToggle';
import { categoryList, ratingList } from '../../event/filter/constants';
import '../../event/filter/FilterPanel.css';
import CheckboxProton from './CheckboxProton';
import SliderProton from './SliderProton';


const FilterPanel = ({
  selectedCategory,
  selectToggle,

  selectedRating,
  selectRating,

  decorations,
  changeChecked,

  changePrice,
  selectedPrice,
}) => {

  return (
    <div>

      {/* Category */}
      {/* <div className="input-group">
        <p className="label"> Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div> */}


      {/* Decoration */}
      <div className="input-group">
        <p className="label"> Decoration</p>
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