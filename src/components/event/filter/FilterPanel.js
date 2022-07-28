import React from 'react'
import FilterListToggle from '../../event/filter/FilterListToggle';

const FilterPanel = ({categoryList, selectedCategory, selectToggle}) => {
  return (
    <div>
        {/* Category */}
        <div className= "input-group">
          <p className="label"> Category</p>
          <FilterListToggle 
          options ={categoryList} 
          value={selectedCategory} 
          selectToggle={selectToggle}/>
        </div>

        {/* Cuisine */}

        {/* Price Range */}

        {/* Star Rating */}
    </div>
  )
}

export default FilterPanel