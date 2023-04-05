import React from 'react'
import Card from '../Card/Card';
import "./Cardlist.scss";

const Cardlist = (props) => {
    const { beerData } = props;

    const beerList = beerData?.map( (beer, id) =>
        (<Card 
          name={beer.name}  
          image={beer.image_url} 
          tagline={beer.tagline}
          first_brewed={beer.first_brewed}
          description={beer.description}
          key={id}
            />)
    
    )

  return (
    <div className='beerList__Container'>
        {beerList}    
    </div>
    )
}

export default Cardlist