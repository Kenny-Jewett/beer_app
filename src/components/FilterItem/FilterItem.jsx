import React from 'react'

export const FilterItem = (props) => {
    const { name, value } = props;

  return (
    <>
        <input type="checkbox" name={name} value={value} />
        <label htmlFor={name}>{name}</label>
    </>
  )
}
