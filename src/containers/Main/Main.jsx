import React, { useState, useEffect } from 'react'
import Cardlist from '../../components/Cardlist/Cardlist';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    const [ beerData, setBeerData ] = useState();
    const [ searchTerm, setSearchTerm] = useState("");

    const getBeer = async () => {
        const url = `https://api.punkapi.com/v2/beers?per_page=80`
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setBeerData(data);
    };    

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }
    console.log(searchTerm);
    
    
    const filteredBeerData = beerData?.filter((beers) => {
        const beersNameLower = beers.name.toLowerCase();
        
        return beersNameLower.includes(searchTerm) && beers.name;
    });

    const handleFilter = (event) => {
        console.log(event.target.value);
    }


  return (
      <>
      <div>
        <Navbar searchTerm={searchTerm} handleInput={handleInput} />
      </div>
      <button onClick={getBeer}>API Test</button>
      <Cardlist beerData={filteredBeerData} />
      </>
  )
}

export default Main