import React, { useState, useEffect } from 'react'
import Cardlist from '../../components/Cardlist/Cardlist';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    const [ beerData, setBeerData ] = useState();
    const [ searchTerm, setSearchTerm] = useState("");
    const [ isFilteredByPh, setIsFilteredByPh ] = useState(true);
    const [ isFilteredByClassicRange, setIsFilteredByClassicRange ] = useState(true);
    const [ isFilteredByAbv, setIsFilteredByAbv ] = useState(true);

    const apiURL = `https://api.punkapi.com/v2/beers?per_page=80` 
    

    const getBeer = async () => {
        const url = apiURL;
        const res = await fetch(url);
        const data = await res.json();

        setBeerData(data)
    };

    useEffect(() => {getBeer()}, []);

   
    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }    
    
    const searchedBeerData = beerData?.filter((beers) => {
        const beersNameLower = beers.name.toLowerCase();
        
        return beersNameLower.includes(searchTerm) && beers.name;
    });

    const handleFilter = (event) => {       

        switch (true) {
            case event.target.value === "ph" && isFilteredByPh === true:
                setIsFilteredByPh(!isFilteredByPh);
                const filterByPh = beerData?.filter((beers) => beers.ph < 4);                
                setBeerData(filterByPh);
                break;
            case event.target.value === "ph" && isFilteredByPh === false:
                setIsFilteredByPh(!isFilteredByPh);                
                getBeer();
                break;
            case event.target.value === "first_brewed" && isFilteredByClassicRange === true:
                setIsFilteredByClassicRange(!isFilteredByClassicRange);
                const filterByClassicRange = beerData?.filter((beers) => {
                    const beerYear = parseInt(beers.first_brewed.slice(3, 7));
                    if(beerYear <= 2010){
                        return beerYear;
                    };
                });
                setBeerData(filterByClassicRange);                
                break;
            case event.target.value === "first_brewed" && isFilteredByClassicRange === false:
                setIsFilteredByClassicRange(!isFilteredByClassicRange);
                getBeer();
                break;
            case event.target.value === "abv" && isFilteredByAbv === true:
                setIsFilteredByAbv(!isFilteredByAbv);
                const filterByAbv = beerData?.filter((beers) => beers.abv > 6);              
                setBeerData(filterByAbv);                
                break; 
            case event.target.value === "abv" && isFilteredByAbv === false:
                setIsFilteredByAbv(!isFilteredByAbv)
                getBeer();
                break;          
            default:
                break;
        };       
    };
    


  return (
      <>
      <div>
        <Navbar 
            searchTerm={searchTerm} 
            handleInput={handleInput} 
            handleFilter={handleFilter} 
            />
      </div>      
      <Cardlist beerData={searchedBeerData} />
      </>
  )
}

export default Main