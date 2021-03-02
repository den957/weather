import React, { useEffect } from 'react'
import s from './Weather.module.css'
import { connect } from 'react-redux'
import Weather from './Weather'
import { getInfoWeatherTC } from '../../redux/weather.reducer'

export const WeatherContainer = (props) => {
   useEffect(() => {
      props.getInfoWeatherTC()
   }, [])
   console.log(props)
   return (
      <>
         <Weather />
      </>
   )
}
const mapDispatchToProps = (dispatch) => {
   return {
      getInfoWeatherTC: () => { dispatch(getInfoWeatherTC()) }
   }
}
const mapStateToProps = (state) => {
   return {
      weather: state.weather.weather
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)