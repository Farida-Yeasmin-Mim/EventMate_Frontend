import React, { useState } from 'react'
import SearchBar from '../../event/filter/SearchBar';
import FilterPanel from '../../event/filter/FilterPanel';
import List from '../../event/filter/List';
import '../../event/filter/Home.css';
import {dataList} from '../../event/filter/constants';


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);

  const [decoration, setdecoration] = useState([

    {
      id: 1,
      checked: false,
      label: 'color',
    },
    {
      id: 2,
      checked: false,
      label: 'theme',
    },
    {
      id: 3,
      checked: false,
      label: 'flower',
    }

  ])

  // Category
  // check if value present or not, if null then receive the value of selectedCategory
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  // Rating
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  // Decoration
  const handlechangeChecked = id => {
    const decorationStateList = decoration;
    const changeCheckedDecoration = decorationStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);

    setdecoration(changeCheckedDecoration);
  }

  // price
  const handleChangePrice = (event, value) =>
    setSelectedPrice(value);


  return (

    <div className="home">
      {/* Search Bar */}
      <SearchBar />


      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Filter Panel */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            decoration={decoration}
            changeChecked={handlechangeChecked}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />

        </div>


        <div className="home_list-wrap">
          {/* List */}
          <List list={list} />
        </div>


      </div>
    </div>
  )
}

export default Home




