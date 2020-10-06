import { Link, Typography } from '@material-ui/core'
import React from 'react'

export default () => (
  <footer style={{ marginBottom: 60 }}>
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="https://github.com/mbaboshko">
        Maksym Baboshko
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </footer>
)
