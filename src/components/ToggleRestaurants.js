import { useState } from 'react'
import Restaurants from './Restaurants/Restaurants'

const ToggleRestaurants = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show);
  }

  if (show) {
    return (
      <>
        <Restaurants>
          See all restaurants
      </Restaurants>
        <button onClick={handleClick}>Hide</button>
      </>
    );
  } else {
    return <button onClick={handleClick}>Restaurants</button>
  }
}


export default ToggleRestaurants;
