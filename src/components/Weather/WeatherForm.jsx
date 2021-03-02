import React from 'react'
import s from './Weather.module.css'
import { Field, reduxForm } from "redux-form";

export const WeatherForm = (props) => {
   return (
      <form className={s.weather__form} onSubmit={props.handleSubmit}>
         <Field className={s.weather__input} component={'input'} name={'city'} />
         <button type={'submit'}>Send</button>
      </form>
   )
}
export const WeatherReduxForm = reduxForm({ form: 'city' })(WeatherForm)