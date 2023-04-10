import React from 'react'
import { FilterItem } from '../FilterItem/FilterItem'

const FilterList = (props) => {
    const { handleFilter } = props;



  return (
    <>
     <FilterItem  
        name={"High ABV"}
        value={"abv"} 
        handleFilter={handleFilter} 
        />
     <FilterItem  
        name={"Classic Range"} 
        value={"first_brewed"} 
        handleFilter={handleFilter} 
        />
     <FilterItem  
        name={"Acidic (ph < 4)" } 
        value={"ph"} 
        handleFilter={handleFilter} 
        />
    </>
  )
}

export default FilterList