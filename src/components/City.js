import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { alert, deleteCity, updateWeather } from '../redux/actions'
import { Link } from 'react-router-dom'

export default function CityItem(props) {
  const { id, city, temp, feelsLike, description, date } = props
  const dispatch = useDispatch()

  const deleteHandler = () => {
    dispatch(deleteCity(id))
    dispatch(alert({ text: `${city} city removed from your list`, severity: 'success' }))
  }

  return (
    <Card>
      <CardActionArea>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/details/${id}`}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {` ${city} ${temp}`}&deg;
              <span style={{ fontSize: '16px' }}> (Feels like {feelsLike}&deg;)</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Today ${description}.`}
            </Typography>
            <Typography
              style={{ marginTop: 10 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {date}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(updateWeather(id))}>
          Обновить
        </Button>
        <Button size="small" color="secondary" onClick={deleteHandler}>
          Удалить
        </Button>
      </CardActions>
    </Card>
  )
}
