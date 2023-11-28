import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        token: '',
        isLogged: false,
    },
    reducers: {
        logIn(state, { payload }) {
            return { ...state, isLogged: true, username: payload.username, token: payload.token, email: payload.email }
        },
        logOut(state) {
            return { ...state, isLogged: false, username: '', token: '', email: '' }
        }
    }
})

export const { logIn, logOut } = slice.actions

export const selectUser = state => state.user;

export default slice.reducer