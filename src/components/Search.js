import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Headline from './Headline'
import {
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core'
import useWeather from '../hooks/weather.hook'

export default function Search() {
  const weather = useWeather()

  return (
    <div style={{ backgroundColor: '#fff', padding: 50 }}>
      <Container maxWidth="sm">
        <div style={{ marginTop: 20, position: 'relative' }}>
          <Headline />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              labelWidth={52}
              {...weather}
            />
          </FormControl>
        </div>
      </Container>
    </div>
  )
}
