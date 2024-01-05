import { configureStore,combineReducers  } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import noteGroupSlice from '../features/noteGroups/noteGroupSlice'
import utilitySlice  from '../features/utility/utility'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,createTransform  } from 'redux-persist';
import {thunk} from 'redux-thunk';

const blacklistTransform = createTransform((inboundState, key) => {
  if (key === 'utility') {
    // Remove the 'formPopUpFlag' from the state persistence
    const { formPopUpFlag, ...rest } = inboundState;
    return rest;
  }
  return inboundState;
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [blacklistTransform],
}

const rootReducer = combineReducers({
    counter: counterReducer,
    noteGroups : noteGroupSlice,
    utility: utilitySlice,
    
  })
const persistedReducer = persistReducer(persistConfig,rootReducer )



export const store = configureStore({
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(thunk),
  //getDefaultMiddleware({serializableCheck: false}) for non-seriazable value in state like null (value that are not present in json)
})

export const persistor = persistStore(store)