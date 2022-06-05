import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name:'employeeSlice',
    initialState: {
        isLogin: false,
    },
    reducers: {
        reducer_isLogin : (state, action) => { state.isLogin = action.payload },
    },
})

export const { reducer_isLogin } = loginSlice.actions

export const reducer_loginSlice = loginSlice.reducer