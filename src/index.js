import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Store from './redux/Store'
import App from './App'

const app = (
  <BrowserRouter>
    <Store>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Store>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
