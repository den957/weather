import React from 'react'
import './App.css'
import { Redirect, Route } from 'react-router-dom'
import WeatherContainer from './components/Weather/WeatherContainer'

const App = (props) => {
  return (
    <>
      <Redirect to='/lodz' />
      <Route path='/:city?' render={() => <WeatherContainer />} />
    </>
  )
}
export default App
