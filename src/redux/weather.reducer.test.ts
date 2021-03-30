import weatherReducer, { getInfoWeatherSuccess, InitialStateType } from "./weather.reducer"
let state: InitialStateType
it('state should be change', () => {
   //test data
   let action = getInfoWeatherSuccess('Hello' as any)
   state = {
      weather: null
   }
   //test action
   let newState = weatherReducer(state, action)
   //test expectation
   expect(newState.weather).toBe('Hello')
})