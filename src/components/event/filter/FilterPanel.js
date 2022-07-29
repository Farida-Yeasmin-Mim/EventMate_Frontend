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
  decoration, 
  changeChecked,
  changedPrice,
  selectedPrice,
}) => {
  
    return (
    <div>

      {/* Category */}
      <div className="input-group">
        <p className="label"> Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle} 
          />
      </div>


      {/* Decoration */}
      <div className="input-group">
        <p className="label"> Decoration</p>
        {decoration.map((decoration)=>(
        <CheckboxProton 
        key={decoration.id}
        decoration={decoration}
        changeChecked={changeChecked} 
        />
        ))}
      </div>


      {/* Price Range */}
      <div className="input-group">
      <p className="label-range"> Star Rating</p>
      <SliderProton value={selectedPrice} changedPrice={changedPrice}/>

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