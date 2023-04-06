import React from 'react'
import FilterList from '../FilterList/FilterList';
import SearchBox from '../SearchBox/SearchBox';

const Navbar = (props) => {
    const { searchterm, handleInput } = props;

  return (
    <div>
        <div>
            <SearchBox 
                searchterm={searchterm} 
                handleInput={handleInput} />
        </div>
        <FilterList />    
    </div>
  )
}

export default Navbar