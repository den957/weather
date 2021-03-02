import { weatherApi } from "../api/api"

const getInfoWeatherSuccessType = 'GET_INFO_WEATHER_SUCCESS_TYPE'

const initialState = {
   weather: null
}
const weatherReducer = (state = initialState, action) => {
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
export const getInfoWeatherSuccess = (data) => ({ type: getInfoWeatherSuccessType, data })
export const getInfoWeatherTC = () => {
   return (dispatch) => {
      weatherApi.weatherInfo()
         .then((response) => {
            if (response.statusText === 'OK') {
               dispatch(getInfoWeatherSuccess(response.data))
            }
         })
   }
}
export default weatherReducer