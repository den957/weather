import axios from 'axios'

export const weatherApi = {
   weatherInfo(dataCity) {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${dataCity}&appid=9f2486a52618766bf36ec0fa97d8385d`)
   }
}