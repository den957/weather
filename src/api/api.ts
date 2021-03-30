import axios from 'axios'

export const weatherApi = {
   weatherInfo(dataCity: string) {
      if (window.location.protocol === 'http:') {
         let url = 'http://api.openweathermap.org/data/2.5/'
         return axios.get(`${url}weather?q=${dataCity}&appid=9f2486a52618766bf36ec0fa97d8385d`)
      } else {
         let url = 'https://api.openweathermap.org/data/2.5/'
         return axios.get(`${url}weather?q=${dataCity}&appid=9f2486a52618766bf36ec0fa97d8385d`)
      }
   }
}