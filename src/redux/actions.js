import axios, { API_KEY } from '../axios'
import {
  ADDED_CITY,
  CITIES_LOADED,
  DELETED_CITY,
  FINISH_LOADING,
  HIDE_ALERT,
  SHOW_ALERT,
  START_LOADING,
  UPDATED_CITY,
  WEATHER_LOADED,
} from './types'

// App actions

export const startLoading = () => ({ type: START_LOADING })
export const finishLoading = () => ({ type: FINISH_LOADING })
export const showAlert = options => ({ type: SHOW_ALERT, payload: options })
export const hideAlert = () => ({ type: HIDE_ALERT })

export const alert = options => dispatch => {
  dispatch(showAlert(options))
  setTimeout(() => dispatch(hideAlert()), 2000)
}

// Weather actions

export const addCity = weather => ({ type: ADDED_CITY, payload: weather })
export const addCities = cities => ({ type: CITIES_LOADED, payload: cities })
export const deleteCity = id => ({ type: DELETED_CITY, payload: id })

export const fetchWeather = () => async (dispatch, getState) => {
  try {
    const { weather } = getState()

    if (weather.cities.length > 0 && weather.weather.length === 0) {
      dispatch(startLoading())

      const params = { id: weather.cities.toString(), units: 'metric', appid: API_KEY }
      const { data } = await axios.get('/group?', { params })

      dispatch({ type: WEATHER_LOADED, payload: data.list })
      dispatch(finishLoading())
    }
  } catch (error) {
    dispatch(finishLoading())
    dispatch(
      alert({ text: 'Failed to load weather data. Please try again later!', severity: 'error' })
    )
  }
}

export const updateWeather = id => async dispatch => {
  try {
    const params = { id, units: 'metric', appid: API_KEY }
    const { data } = await axios.get('/weather?', { params })

    dispatch({ type: UPDATED_CITY, payload: data })
    dispatch(alert({ text: 'Weather data updated successfully!', severity: 'success' }))
  } catch (error) {
    dispatch(
      alert({ text: 'Failed to update weather data. Please try again later!', severity: 'error' })
    )
  }
}
