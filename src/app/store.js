import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import noteGroupSlice from '../features/noteGroups/noteGroupSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    noteGroups : noteGroupSlice,
    
  },
})