import axios from 'axios'

export const weatherApi = {
   weatherInfo() {
      return axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=9f2486a52618766bf36ec0fa97d8385d')
   }
}