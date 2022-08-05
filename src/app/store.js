import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from '../movie/movieSlice'

export const store = configureStore({
    reducer: moviesSlice,
})