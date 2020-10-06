import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCity, alert } from '../redux/actions'
import axios, { API_KEY } from '../axios'

export default function useWeather() {
  const [value, setValue] = useState('')
  const { cities } = useSelector(state => state.weather)
  const dispatch = useDispatch()

  const onChange = e => setValue(e.target.value)

  const onKeyUp = async e => {
    if (e.key !== 'Enter') return

    try {
      const params = { q: value, units: 'metric', appid: API_KEY }
      const { data } = await axios.get('/weather', { params })
      setValue('')

      if (!cities.includes(data.id)) {
        dispatch(addCity(data))
        dispatch(alert({ text: `${data.name} city added to your list!`, severity: 'success' }))
      }
    } catch (error) {
      setValue('')
      dispatch(alert({ text: 'City not found', severity: 'error' }))
    }
  }

  return { value, onKeyUp, onChange }
}
