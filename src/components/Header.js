import React from 'react'
import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import { Cloud } from '@material-ui/icons'

export default () => (
  <>
    <CssBaseline />
    <AppBar position="relative" style={{ backgroundColor: '#222' }}>
      <Toolbar>
        <Cloud style={{ marginRight: 20 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Weather
        </Typography>
      </Toolbar>
    </AppBar>
  </>
)
