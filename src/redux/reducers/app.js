import { START_LOADING, FINISH_LOADING, SHOW_ALERT, HIDE_ALERT } from '../types'

const initialState = { loading: false, alert: { visible: false, text: null, severity: 'error' } }

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true }
    case FINISH_LOADING:
      return { ...state, loading: false }
    case SHOW_ALERT:
      return { ...state, alert: { ...state.alert, visible: true, ...action.payload } }
    case HIDE_ALERT:
      return { ...state, alert: { ...state.alert, visible: false } }
    default:
      return state
  }
}
