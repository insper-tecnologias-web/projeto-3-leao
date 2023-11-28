import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        token: '',
        isLogged: false,
    },
    reducers: {
        logIn(state, { payload }) {
            return { ...state, isLogged: true, username: payload.username, token: payload.token }
        },
        logOut(state) {
            return { ...state, isLogged: false, username: '', token: '' }
        }
    }
})

export const { logIn, logOut } = slice.actions

export const selectUser = state => state.user;

export default slice.reducer