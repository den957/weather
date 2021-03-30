import React from 'react'
import s from './Weather.module.css'
import cn from 'classnames'
import clouds from '../../assets/images/weather/clouds.png'
import rain from '../../assets/images/weather/rain.png'
import sunCloud from '../../assets/images/weather/sunCloud.png'
import sun from '../../assets/images/weather/sun.png'

type PropsType = {
   humidity: number,
   temp: number,
   feels_like: number,
   pressure: number,
   temp_min: number,
   temp_max: number,
   speed: number,
   all: number
}

const Weather: React.FC<PropsType> = ({ humidity, temp, feels_like, pressure, temp_min, temp_max, speed, all }) => {
   const convert = (t: number) => {
      return Math.round(t - 273.15)
   }
   return (
      <div className={s.weather__body}>
         <div className={s.body__row}>
            <div className={s.body__info}>
               <div className={s.infoBody__image}>
                  {all <= 25 &&
                     <img src={sun} alt={''} />
                  }
                  {all <= 50 && all > 25 &&
                     <img src={sunCloud} alt={''} />
                  }
                  {all <= 90 && all > 50 &&
                     <img src={clouds} alt={''} />
                  }
                  {all <= 100 && all > 90 &&
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
                  Wind, kmh <span>{speed}</span>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Weather