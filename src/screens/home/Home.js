import Search from '../../components/Search/Search'
import ToggleRestaurants from '../../components/ToggleRestaurants'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Yelp Clone</h1>
      <Search />
      <ToggleRestaurants />
    </div>
  )
}

export default Home