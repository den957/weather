import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Weather from './Weather'
import { getInfoWeatherTC } from '../../redux/weather.reducer'

export const WeatherContainer = (props) => {
   return (
      <>
         <Weather getInfoWeatherTC={props.getInfoWeatherTC} />
      </>
   )
}
const mapDispatchToProps = (dispatch) => {
   return {
      getInfoWeatherTC: (dataCity) => { dispatch(getInfoWeatherTC(dataCity)) }
   }
}
const mapStateToProps = (state) => {
   return {
      weather: state.weather.weather
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)