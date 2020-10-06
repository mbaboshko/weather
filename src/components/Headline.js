import React from 'react'
import { Typography } from '@material-ui/core'

export default function Headline() {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Weather
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Add the city whose weather you want to track
      </Typography>
    </>
  )
}
