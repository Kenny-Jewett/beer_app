import React from 'react'
import { FilterItem } from '../FilterItem/FilterItem'

const FilterList = () => {




  return (
    <>
     <FilterItem  name={"High ABV"} value={"abv"} />
     <FilterItem  name={"Classic Range"} value={"first_brewed"}/>
     <FilterItem  name={"Acidic (ph < 4)" } value={"ph"} />
    </>
  )
}

export default FilterList