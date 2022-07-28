import React from 'react'
import SearchBar from '../../event/filter/SearchBar';
import FilterPanel from '../../event/filter/FilterPanel';
import List from '../../event/filter/List';

const Home = () => {
  return (
      
      <div className="home">
        {/* Search Bar */}
        <SearchBar />


        <div className="home_panelList-wrap">
          <div className="home_panel-wrap">
            {/* Filter Panel */}
            <FilterPanel />

          </div>


          <div className="home_list-wrap">
            {/* List */}
            <List />
          </div>


        </div>
      </div>
  )
}

export default Home




