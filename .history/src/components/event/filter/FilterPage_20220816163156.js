import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import List from './List';
import EmptyView from './EmptyView';
import CartSide from './CartSide';
import '../../event/filter/FilterPage.css';
import { dataList } from './constants';
import Button from '@mui/material/Button';
import { CartState } from '../../context/Context';

const FilterPage = () => {
  const {state: {products, cart}} = CartState();
  const [selectedCategory, setSelectedCategory] = useState(null); /* create and set the variable using useState*/
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(products);   
  const [searchInput, setSearchInput] = useState('');
  const [resultsFound, setResultsFound] = useState(true);
  const [decorations, setDecorations] = useState([

    {
      id: 1,
      checked: false,
      label: 'Wedding',
    },
    {
      id: 2,
      checked: false,
      label: 'Birthday',
    },
    {
      id: 3,
      checked: false,
      label: 'Proposal',
    }

  ])

  
  // Category
  // check if value is present or not, if null then receive the value of selectedCategory
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);


  // Rating
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);


  // Decoration
  const handleChangeChecked = (id) => {
    const decorationsStateList = decorations;
    const changeCheckedDecorations = decorationsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);

    setDecorations(changeCheckedDecorations);
  }


  // price
  const handleChangePrice = (event, value) =>
    setSelectedPrice(value);


  

    //For all filters
  const applyFilters = () => {
    let updatedList = dataList;  /*updatedList variable is assigned with dataList value where all items are present*/


    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    
    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }


    // Decoration Filter
    const decorationsChecked = decorations
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (decorationsChecked.length) {
      updatedList = updatedList.filter((item) =>
        decorationsChecked.includes(item.decoration)
      );
    }


    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );



    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);


    /* if the length of updatedList = 0 (no result found), then setResultFound = false, if result if found then  setResultFound = true*/
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, decorations, selectedPrice, searchInput]);



  return (

    
    <div className="home">
      
      




       {/* Filter Panel */}
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Search Bar */}
          <SearchBar value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
          <FilterPanel
            
            // Category
            selectToggle={handleSelectCategory} 
            selectedCategory={selectedCategory}
            
            // Decoration
            decorations={decorations}
            changeChecked={handleChangeChecked}
            
            // Price Range
            changePrice={handleChangePrice}
            selectedPrice={selectedPrice}
            
            // Star Rating
            selectRating={handleSelectRating}
            selectedRating={selectedRating}            
          />

    <CartSide/>

        </div>



        {/* List & Empty view*/}
        <div className="home_list-wrap">
        
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>


      </div>
    </div>
  )
}

export default FilterPage




