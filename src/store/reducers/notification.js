const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_RESTAURANT_NOTIFICATION' :
      return action.data.content
    default:
      return state
  }
}

export default notificationReducer