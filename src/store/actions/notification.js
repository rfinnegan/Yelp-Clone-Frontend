export const displayRestaurantNotification = (content) => {
  return {
    type: 'DISPLAY_RESTAURANT_NOTIFICATION',
    data: {
      content: content
    }
  }
}