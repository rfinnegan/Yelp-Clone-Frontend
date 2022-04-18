import {initializeRestaurants, getRestaurantById, createNewRestaurant} from './restaurants'
import {initializeReviews, getReviewsForRestaurant, createNewReview} from './reviews'
import {searchRestaurants} from './search'
import {displayRestaurantNotification} from './notification'

const actions = {
  initializeRestaurants,
  getRestaurantById,
  createNewRestaurant,
  initializeReviews,
  getReviewsForRestaurant,
  createNewReview,
  searchRestaurants,
  displayRestaurantNotification
}

export default actions