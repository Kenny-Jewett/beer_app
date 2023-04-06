import React from 'react'
import FilterList from '../FilterList/FilterList';
import SearchBox from '../SearchBox/SearchBox';

const Navbar = (props) => {
    const { searchterm, handleInput, handleFilter } = props;

  return (
    <div>
        <div>
            <SearchBox 
                searchterm={searchterm} 
                handleInput={handleInput} />
        </div>
        <FilterList handleFilter={handleFilter} />    
    </div>
  )
}

export default Navbar