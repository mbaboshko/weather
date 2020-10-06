import axios from 'axios'

export const API_KEY = '01d396de8bfe9be8523e53002de83b77'

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})
