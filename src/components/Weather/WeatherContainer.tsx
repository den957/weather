import React, { useEffect, useState } from 'react'
import s from './Weather.module.css'
import cn from 'classnames'
import { connect } from 'react-redux'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import Weather from './Weather'
import { getInfoWeatherTC, WeatherType } from '../../redux/weather.reducer'
import logo from '../../assets/images/logo.png'
import lodz from '../../assets/images/city/lodz.jpg'
import warsaw from '../../assets/images/city/warsaw.jpg'
import gdansk from '../../assets/images/city/gdansk.jpg'
import krakow from '../../assets/images/city/krakow.jpg'
import poznan from '../../assets/images/city/poznan.jpg'
import wroclaw from '../../assets/images/city/wroclaw.jpg'
import Preloader from '../Common/Preloader'
import { AppReducerType } from '../../redux/store'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

type MapStateToPropsType = {
   weather: WeatherType | null
}
type MapDispatchToPropsType = {
   getInfoWeatherTC: (dataCity: string) => void,
}
type MathParamsType = {
   city: string
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<MathParamsType>
export const WeatherContainer: React.FC<PropsType> = ({ getInfoWeatherTC, match, ...props }) => {
   const [city, setCity] = useState([
      { active: false, name: 'Warsaw', id: 1, image: warsaw, link: 'warsaw' },
      { active: true, name: 'Lodz', id: 2, image: lodz, link: 'lodz' },
      { active: false, name: 'Wroclaw', id: 3, image: wroclaw, link: 'wroclaw' },
      { active: false, name: 'Krakow', id: 4, image: krakow, link: 'krakow' },
      { active: false, name: 'Gdansk', id: 5, image: gdansk, link: 'gdansk' },
      { active: false, name: 'Poznan', id: 6, image: poznan, link: 'poznan' }
   ])
   useEffect(() => {
      getInfoWeatherTC(match.params.city)
   }, [match.params.city])
   //create date 
   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
   const newDate = new Date();
   let date = `${months[newDate.getMonth()]} ${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}`
   // convert Degrees kelvin to Degrees Celsius
   //add active class
   let addActiveClass = (id: number) => {
      city.map((el) => {
         if (el.id === id) {
            return el.active = true
         }
      })
   }
   //remove active class
   let removeActiveClass = (id: number) => {
      city.map((el) => {
         return el.active = false
      })
   }
   //create arr of cities
   const cityArr = city.map((el) => {
      return (
         <NavLink to={`${el.link}`} key={el.id} className={el.active ? cn(s.city__item, s.city__active) : s.city__item} onClick={() => { removeActiveClass(el.id); addActiveClass(el.id) }} >
            <div className={s.city__name}>
               {el.name}
            </div>
            <div className={s.city__date}>
               {date}
            </div>
            <div className={s.city__image}>
               <img src={el.image} alt={''} />
            </div>
         </NavLink >
      )
   })
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
                        {cityArr}
                     </div>
                  </div>
                  {!props.weather
                     ? <Preloader />
                     : <Weather {...props.weather.main} speed={props.weather.wind.speed} all={props.weather.clouds.all} />
                  }
               </section>
            </div>
         </div>
      </>
   )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): MapDispatchToPropsType => {
   return {
      getInfoWeatherTC: (dataCity: string) => { dispatch(getInfoWeatherTC(dataCity)) }
   }
}
const mapStateToProps = (state: AppReducerType): MapStateToPropsType => {
   return {
      weather: state.weather.weather
   }
}
let withUrlData = withRouter(WeatherContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withUrlData)