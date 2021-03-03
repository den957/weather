import React from 'react'
import s from './Weather.module.css'
import cn from 'classnames'
import clouds from '../../assets/images/weather/clouds.png'
import rain from '../../assets/images/weather/rain.png'
import sunCloud from '../../assets/images/weather/sunAndcloud.png'
import sun from '../../assets/images/weather/sun.png'

const Weather = (props) => {
   // convert Degrees kelvin to Degrees Celsius
   const convert = (temp) => {
      return Math.round(temp - 273.15)
   }
   return (
      <>
         <div className={s.weather__body}>
            <div className={s.body__row}>
               <div className={s.body__info}>
                  <div className={s.infoBody__image}>
                     {props.weather.clouds.all <= 25 &&
                        <img src={sun} alt={''} />
                     }
                     {props.weather.clouds.all <= 50 && props.weather.clouds.all > 25 &&
                        <img src={sunCloud} alt={''} />
                     }
                     {props.weather.clouds.all <= 90 && props.weather.clouds.all > 50 &&
                        <img src={clouds} alt={''} />
                     }
                     {props.weather.clouds.all <= 100 && props.weather.clouds.all > 90 &&
                        <img src={rain} alt={''} />
                     }
                  </div>
                  <div className={s.infoBody__degrees}>
                     <div className={s.degreesBody__row}>
                        <div className={s.degreesBody__max}>
                           max
                           <div>{convert(props.weather.main.temp_max)}°C</div>
                        </div>
                        <div className={s.degreesBody__min}>
                           min
                           <div>{convert(props.weather.main.temp_min)}°C</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={s.body__detail}>
                  <div className={cn(s.detailBody__temperature, s.detailBody__item)}>
                     Temperature, °C <span>{convert(props.weather.main.temp)}°</span>
                  </div>
                  <div className={cn(s.detailBody__feelsLike, s.detailBody__item)}>
                     feels like <span>{convert(props.weather.main.feels_like)}°</span>
                  </div>
                  <div className={cn(s.detailBody__pressure, s.detailBody__item)}>
                     Pressure, mm <span>{Math.round(props.weather.main.pressure * 0.750064) /*1 mbar = 0.750064 mmH*/}</span>
                  </div>
                  <div className={cn(s.detailBody__humidity, s.detailBody__item)}>
                     Humidity, % <span>{props.weather.main.humidity}</span>
                  </div>
                  <div className={cn(s.detailBody__humidity, s.detailBody__item)}>
                     Wind, kmh <span>{props.weather.wind.speed}</span>
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}
export default Weather