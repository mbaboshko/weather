import React, { useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addCities, fetchWeather } from '../redux/actions'
import { fullDate } from '../utils/generateDate'
import Loader from './UI/Loader/Loader'
import City from './City'

export default function Cities() {
  const { weather, cities } = useSelector(state => state.weather)
  const { loading } = useSelector(state => state.app)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addCities(JSON.parse(localStorage.getItem('cities')) || []))
    dispatch(fetchWeather())
  }, []) // eslint-disable-line

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities))
  }, [cities])

  return (
    <Container style={{ padding: '60px 20px' }} maxWidth="lg">
      {loading ? (
        <Loader />
      ) : weather.length > 0 ? (
        <Grid container spacing={4}>
          {weather.map(city => {
            const { id, name, dt, main, weather } = city
            const date = fullDate(new Date(dt * 1000))

            return (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <City
                  id={id}
                  city={name}
                  temp={Math.round(main.temp)}
                  feelsLike={Math.round(main.feels_like)}
                  description={weather[0].description}
                  date={date}
                />
              </Grid>
            )
          })}
        </Grid>
      ) : (
        <p style={{ fontSize: '24px', textAlign: 'center' }}>
          You have not added any cities to your list yet :(
        </p>
      )}
    </Container>
  )
}
