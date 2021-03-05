import React from 'react'
import s from './Weather.module.css'
import cn from 'classnames'
import clouds from '../../assets/images/weather/clouds.png'
import rain from '../../assets/images/weather/rain.png'
import sunCloud from '../../assets/images/weather/sunCloud.png'
import sun from '../../assets/images/weather/sun.png'

const Weather = ({ humidity, temp, feels_like, pressure, temp_min, temp_max, ...props }) => {
   const convert = (t) => {
      return Math.round(t - 273.15)
   }
   return (
      <div className={s.weather__body}>
         <div className={s.body__row}>
            <div className={s.body__info}>
               <div className={s.infoBody__image}>
                  {props.all <= 25 &&
                     <img src={sun} alt={''} />
                  }
                  {props.all <= 50 && props.all > 25 &&
                     <img src={sunCloud} alt={''} />
                  }
                  {props.all <= 90 && props.all > 50 &&
                     <img src={clouds} alt={''} />
                  }
                  {props.all <= 100 && props.all > 90 &&
                     <img src={rain} alt={''} />
                  }
               </div>
               <div className={s.infoBody__degrees}>
                  <div className={s.degreesBody__row}>
                     <div className={s.degreesBody__max}>
                        max
                           <div>{convert(temp_max)}°C</div>
                     </div>
                     <div className={s.degreesBody__min}>
                        min
                           <div>{convert(temp_min)}°C</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={s.body__detail}>
               <div className={cn(s.detailBody__temperature, s.detailBody__item)}>
                  Temperature, °C <span>{convert(temp)}°</span>
               </div>
               <div className={cn(s.detailBody__feelsLike, s.detailBody__item)}>
                  feels like <span>{convert(feels_like)}°</span>
               </div>
               <div className={cn(s.detailBody__pressure, s.detailBody__item)}>
                  Pressure, mm <span>{Math.round(pressure * 0.750064)}</span>
               </div>
               <div className={cn(s.detailBody__humidity, s.detailBody__item)}>
                  Humidity, % <span>{humidity}</span>
               </div>
               <div className={cn(s.detailBody__speed, s.detailBody__item)}>
                  Wind, kmh <span>{props.speed}</span>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Weather