import React from 'react'

const SearchBox = (props) => {
    const { searchTerm, handleInput } = props;
    
  return (
    <div>
        <form action="">
            <label htmlFor="Search bar">Search </label>
            <input 
            type="text"
            value={searchTerm}
            onInput={handleInput}
            placeholder="Search for Beers"
            role="searchbox"
            />
        </form>
    </div>
  )
}

export default SearchBox