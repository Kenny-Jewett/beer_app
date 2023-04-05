import React, { useState } from 'react'
import Cardlist from '../../components/Cardlist/Cardlist';

const Main = () => {
   
    const [ beerData, setBeerData ] = useState();

    const getBeer = async () => {
        const url = `https://api.punkapi.com/v2/beers`
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setBeerData(data)
    }

  

  return (
      <>
      <button onClick={getBeer}>API Test</button>
      <Cardlist beerData={beerData} />
      </>
  )
}

export default Main