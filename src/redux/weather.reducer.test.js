import weatherReducer, { getInfoWeatherSuccess } from "./weather.reducer"

it('state should be change', () => {
   //test data
   let action = getInfoWeatherSuccess('Hello')
   let state = {
      weather: null
   }
   //test action
   let newState = weatherReducer(state, action)
   //test expectation
   expect(newState.weather).toBe('Hello')
})