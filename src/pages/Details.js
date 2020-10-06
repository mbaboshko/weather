import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fullTime } from '../utils/generateDate'
import { addCities, fetchWeather } from '../redux/actions'

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))

export default function Details({ match }) {
  const classes = useStyles()
  const history = useHistory()
  const { weather } = useSelector(state => state.weather)
  const city = weather.find(city => city.id === +match.params.id)
  const dispatch = useDispatch()

  const description = [
    `Feels like ${Math.round(city.main.feels_like)}°C`,
    `Today ${city.weather[0].description}`,
    `Sunrise: ${fullTime(new Date(city.sys.sunrise * 1000))}`,
    `Sunset: ${fullTime(new Date(city.sys.sunset * 1000))}`,
    `Speed of wind: ${city.wind.speed} m/s`,
  ]

  useEffect(() => {
    dispatch(addCities(JSON.parse(localStorage.getItem('cities')) || []))
    dispatch(fetchWeather())
  }, []) // eslint-disable-line

  return (
    <main>
      <Container maxWidth="md" component="main">
        <Card style={{ margin: '40px 0' }}>
          <CardHeader
            title={city.name}
            subheader={city.sys.country}
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.cardPricing}>
              <Typography component="h2" variant="h3" color="textPrimary">
                {Math.round(city.main.temp)}&deg;C
              </Typography>
              <img
                src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                alt={city.weather[0].description}
              />
            </div>
            <ul>
              {description.map(line => (
                <Typography component="li" variant="subtitle1" align="center" key={line}>
                  {line}
                </Typography>
              ))}
            </ul>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="outlined" color="primary" onClick={() => history.push('/')}>
              Back to home
            </Button>
          </CardActions>
        </Card>
      </Container>
    </main>
  )
}
