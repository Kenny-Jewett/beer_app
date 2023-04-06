import React from 'react'
import SearchBox from '../SearchBox/SearchBox';

const Navbar = (props) => {
    const { searchterm, handleInput } = props;

  return (
    <div>
        <SearchBox 
            searchterm={searchterm} 
            handleInput={handleInput} />
    </div>
  )
}

export default Navbar