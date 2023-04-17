import React, { useState } from 'react'

export const FilterItem = (props) => {
    const { name, value, handleFilter } = props;
    

  return (
    <>
        <input 
            role="filter"
            type="checkbox" 
            name={name} 
            value={value} 
            onInput={handleFilter} 
            />
        <label htmlFor={name}>{name}</label>
    </>
  )
}
