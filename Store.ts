import storage from "@react-native-async-storage/async-storage"
import { FLUSH, PAUSE, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"
import TravelReducer from "./redux/TravelReducer"
import { configureStore } from "@reduxjs/toolkit"
import persistStore from "redux-persist/es/persistStore"
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}
const persistedReducer = persistReducer(persistConfig, TravelReducer)
export const store = configureStore({
  reducer: {
    travel: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;