import React from 'react'
import s from './Weather.module.css'
import { WeatherReduxForm } from './WeatherForm'

const Weather = (props) => {
   const onSubmit = (data) => {
      let dataCity = data.city
      props.getInfoWeatherTC(dataCity)
   }
   return (
      <>
         <WeatherReduxForm onSubmit={onSubmit} />
      </>
   )
}
export default Weather