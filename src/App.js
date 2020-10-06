import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Details from './pages/Details'
import Home from './pages/Home'
import Alert from './components/UI/Alert/Alert'

export default function App() {
  return (
    <>
      <Header />
      <div style={{ position: 'relative' }}>
        <Alert />
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" component={Details} />

      <Footer />
    </>
  )
}
