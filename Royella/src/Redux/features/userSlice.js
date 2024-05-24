import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'user',
    initialState:{
        isLogged : false,
        user : null,
        message : '',
    },
    reducers:{
        loggedin:(state)=>{
            state.isLogged = true
        },
        loggedout:(state)=>{
            state.isLogged = false
            state.user = null
        },
        setMessage:(state,action)=>{
            state.message = action.payload
        },
        setUser:(state,action)=>{
            state.user = action.payload
        }
    }
})
export const { loggedin, loggedout, setMessage, setUser } = userSlice.actions
export default userSlice.reducer