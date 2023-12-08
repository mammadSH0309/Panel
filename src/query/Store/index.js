import {configureStore} from '@reduxjs/toolkit'
import { chartsApi } from '../Charts'


export const store = configureStore({
    reducer : {
        [chartsApi.reducerPath] : chartsApi.reducer,
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(chartsApi.middleware)
})

