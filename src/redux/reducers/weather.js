import { ADDED_CITY, CITIES_LOADED, DELETED_CITY, UPDATED_CITY, WEATHER_LOADED } from '../types'

const initialState = { cities: [], weather: [] }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDED_CITY:
      return {
        cities: [...state.cities, action.payload.id],
        weather: [...state.weather, action.payload],
      }
    case DELETED_CITY:
      return {
        cities: [...state.cities.filter(id => id !== action.payload)],
        weather: [...state.weather.filter(city => city.id !== action.payload)],
      }
    case UPDATED_CITY:
      return {
        ...state,
        weather: state.weather.map(city => {
          if (city.id !== action.payload.id) return city
          return action.payload
        }),
      }
    case CITIES_LOADED:
      return { ...state, cities: action.payload }
    case WEATHER_LOADED:
      return { ...state, weather: action.payload }
    default:
      return state
  }
}
