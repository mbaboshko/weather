import { combineReducers } from 'redux'
import weather from './reducers/weather'
import app from './reducers/app'

export default combineReducers({ weather, app })
