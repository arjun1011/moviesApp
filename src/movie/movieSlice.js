import { createSlice } from '@reduxjs/toolkit'
import data from '../data'

const initialState = {
    data: data,
    lastIndex: 0
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        firstLoad: (state) => {
            state.data = data.slice(state.lastIndex, 9)
            state.lastIndex = 8

            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        next: (state) => {
            state.lastIndex = state.lastIndex + 9
            state.data = data.slice(0, state.lastIndex + 1)
        },
        searchMovie: (state, action) => {
            state.data = data.filter(({ name }) => {
                debugger
                if (action.payload === '') {
                    return name
                }
                console.log('name.toLowerCase().includes(action.payload.toLowerCase()):', name.toLowerCase().includes(action.payload.toLowerCase()))

                return name.toLowerCase().includes(action.payload.toLowerCase())
            })
        },
    },
})

// Action creators are generated for each case reducer function
const { firstLoad, next, searchMovie } = moviesSlice.actions

export { firstLoad, next, searchMovie, moviesSlice }