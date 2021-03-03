import React, { useEffect, useState } from 'react'
import s from './Weather.module.css'
import { connect } from 'react-redux'
import Weather from './Weather'
import { getInfoWeatherTC } from '../../redux/weather.reducer'
import logo from '../../assets/images/logo.png'
import lodz from '../../assets/images/city/lodz.jpg'
import warsaw from '../../assets/images/city/warsaw.jpg'
import gdansk from '../../assets/images/city/gdansk.jpg'
import krakow from '../../assets/images/city/krakow.jpg'
import poznan from '../../assets/images/city/poznan.jpg'
import wroclaw from '../../assets/images/city/wroclaw.jpg'
import Preloader from '../Common/Preloader'

export const WeatherContainer = (props) => {
   let cityLodz = 'Lodz'
   useEffect(() => {
      //props.getInfoWeatherTC(cityLodz)
   }, [])
   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
   const newDate = new Date();
   let date = `${months[newDate.getMonth()]} ${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}`
   return (
      <>
         <div className={s.main}>
            <div className={s.container}>
               <div className={s.logo}>
                  <img src={logo} alt={''} />
               </div>
               <div className={s.title}>
                  Weather of Poland city
               </div>
               <section className={s.weather}>
                  <div className={s.weather__city}>
                     <div className={s.city__row}>
                        <div className={s.city__item}>
                           <div className={s.city__name}>
                              Warsaw
                           </div>
                           <div className={s.city__date}>
                              {date}
                           </div>
                           <div className={s.city__image}>
                              <img src={warsaw} alt={''} />
                           </div>
                        </div>
                        <div className={s.city__item}>
                           <div className={s.city__name}>
                              Lodz
                           </div>
                           <div className={s.city__date}>
                              {date}
                           </div>
                           <div className={s.city__image}>
                              <img src={lodz} alt={''} />
                           </div>
                        </div>
                        <div className={s.city__item}>
                           <div className={s.city__name}>
                              Wroclaw
                        </div>
                           <div className={s.city__date}>
                              {date}
                           </div>
                           <div className={s.city__image}>
                              <img src={wroclaw} alt={''} />
                           </div>
                        </div>
                        <div className={s.city__item}>
                           <div className={s.city__name}>
                              Krakow
                        </div>
                           <div className={s.city__date}>
                              {date}
                           </div>
                           <div className={s.city__image}>
                              <img src={krakow} alt={''} />
                           </div>
                        </div>
                        <div className={s.city__item}>
                           <div className={s.city__name}>
                              Gdansk
                        </div>
                           <div className={s.city__date}>
                              {date}
                           </div>
                           <div className={s.city__image}>
                              <img src={gdansk} alt={''} />
                           </div>
                        </div>
                        <div className={s.city__item}>
                           <div className={s.city__name}>
                              Poznan
                        </div>
                           <div className={s.city__date}>
                              {date}
                           </div>
                           <div className={s.city__image}>
                              <img src={poznan} alt={''} />
                           </div>
                        </div>
                     </div>
                  </div>
                  {!props.weather
                     ? <Preloader />
                     : <Weather weather={props.weather} />
                  }
               </section>
            </div>
         </div>
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