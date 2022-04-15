import { useDispatch } from 'react-redux'
import actions from '../../store/actions'
import './CreateRestaurant.css'
import { useState } from 'react'

const { createNewRestaurant } = actions

const CreateRestaurant = () => {
  const [addName, setAddName] = useState('')
  const onNameChange = (event) => {
    setAddName(event.target.value)
  }

  const [addAddress, setAddress] = useState('')
  const onAddressChange = (event) => {
    setAddress(event.target.value)
  }

  const [addCity, setCity] = useState('')
  const onCityChange = (event) => {
    setCity(event.target.value)
  }

  const [addState, setState] = useState('')
  const onStateChange = (event) => {
    setState(event.target.value)
  }

  const [addZip, setZip] = useState('')
  const onZipChange = (event) => {
    setZip(event.target.value)
  }

  const [addPhone, setPhone] = useState('')
  const onPhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const dispatch = useDispatch();
  const addRestaurant = async (event) => {
    const restaurant_name = event.target.name.value
    const address = event.target.address.value
    const city = event.target.city.value
    const state = event.target.state.value
    const zip = event.target.zip.value
    const phone_number = event.target.phone.value
    const restaurant = { restaurant_name, address, city, state, zip, phone_number }
    event.target.value = ''
    event.preventDefault()
    console.log(restaurant)
    const newRestaurant = await createNewRestaurant(restaurant)
    dispatch(newRestaurant)
    setAddName('')
    setAddress('')
    setCity('')
    setState('')
    setZip('')
    setPhone('')
  }

  return (
    <div className="add-container">
      <div className="add-container-text">
        <h2>Add a New Restaurant</h2>
      </div>
      <form className="add-container-form" onSubmit={addRestaurant}>
        <div className="add-input-container">
          <label htmlFor="name">Restaurant Name</label>
          <input onChange={onNameChange} value={addName} name="name" id="restaurant" placeholder="Name" />

          <label htmlFor="address">Address</label>
          <input onChange={onAddressChange} value={addAddress} name="address" id="address" placeholder="Address" />

          <label htmlFor="city">City</label>
          <input onChange={onCityChange} value={addCity} name="city" id="city" placeholder="City" />

          <label htmlFor="state">State</label>
          <input onChange={onStateChange} value={addState} name="state" id="state" placeholder="State" />

          <label htmlFor="zip">Zip Code</label>
          <input onChange={onZipChange} value={addZip} name="zip" id="zip" placeholder="Zip Code" />

          <label htmlFor="phone">Phone Number</label>
          <input onChange={onPhoneChange} value={addPhone} name="phone" id="phone" placeholder="Phone Number" />

          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CreateRestaurant