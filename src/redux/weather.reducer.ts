import { ThunkAction } from "redux-thunk"
import { weatherApi } from "../api/api"
import { AppReducerType } from "./store"

const getInfoWeatherSuccessType = 'GET_INFO_WEATHER_SUCCESS_TYPE'

export type WeatherType = {
   base: string,
   clouds: {
      all: number,
   },
   cod: number,
   coord: {
      lat: number,
      lon: number
   },
   dt: number,
   id: number,
   main: {
      feels_like: number,
      humidity: number,
      pressure: number,
      temp: number,
      temp_max: number,
      temp_min: number
   },
   name: string,
   sys: {
      country: string,
      id: number,
      sunrise: number,
      sunset: number,
      type: number
   },
   timezone: number,
   visibility: number,
   weather: [
      { id: number, main: string, description: string, icon: string }
   ],
   wind: {
      deg: number,
      speed: number
   }
}
export type InitialStateType = typeof initialState
type ActionsType = GetInfoWeatherSuccessType
const initialState = {
   weather: null as null | WeatherType
}
const weatherReducer = (state = initialState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case getInfoWeatherSuccessType: {
         return {
            ...state,
            weather: action.data
         }
      }
      default: {
         return state
      }
   }
}
type GetInfoWeatherSuccessType = {
   type: typeof getInfoWeatherSuccessType,
   data: WeatherType
}
export const getInfoWeatherSuccess = (data: WeatherType): GetInfoWeatherSuccessType => ({ type: getInfoWeatherSuccessType, data })

type ThunkType = ThunkAction<Promise<void>, AppReducerType, unknown, ActionsType>
export const getInfoWeatherTC = (dataCity: string): ThunkType =>
   async dispatch => {
      let data = await weatherApi.weatherInfo(dataCity)
      if (data.statusText === 'OK') {
         dispatch(getInfoWeatherSuccess(data.data))
      }
   }
export default weatherReducer