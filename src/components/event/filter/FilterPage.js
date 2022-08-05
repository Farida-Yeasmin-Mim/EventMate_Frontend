import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import List from './List';
import EmptyView from './EmptyView';
import '../../event/filter/FilterPage.css';
import { dataList } from './constants';


const FilterPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); /* create and set the variable using useState*/
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);   /* dataList is defined in constants.js */
  const [searchInput, setSearchInput] = useState('');
  const [resultsFound, setResultsFound] = useState(true);

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
    const decorationChecked = decoration
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (decorationChecked.length) {
      updatedList = updatedList.filter((item) =>
        decorationChecked.includes(item.decoration)
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
  }, [selectedRating, selectedCategory, decoration, selectedPrice, searchInput]);


  return (

    <div className="home">
      {/* Search Bar */}
      <SearchBar value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />


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



        {/* List & Empty view*/}
        <div className="home_list-wrap">
          {setResultsFound ? <List list={list} /> : <EmptyView />}
        </div>


      </div>
    </div>
  )
}

export default FilterPage




