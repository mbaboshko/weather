import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { useSelector } from 'react-redux'

export default () => {
  const { visible, text, severity } = useSelector(state => state.app.alert)

  if (!visible) return null

  return (
    <div style={{ position: 'fixed', bottom: 30, left: 40 }}>
      <Alert variant="filled" severity={severity}>
        {text}
      </Alert>
    </div>
  )
}
