
import { createSlice } from '@reduxjs/toolkit';

const employeeListSlice = createSlice({
    name: 'counterasd',
    initialState: {
        loading : false,
        employeeId : "",
        employeeName : "",
        subdivision : [1,2,3],
        employeeInfoList : [],
    },
    reducers: {
        reducer_loading : (state, action) => { state.loading = action.payload },
        reducer_employeeId : (state, action) => { state.employeeId = action.payload },
        reducer_employeeName : (state, action) => { state.employeeName = action.payload },
        reducer_employeeNameKana : (state, action) => { state.employeeName = action.payload },
        reducer_subdivision : (state, action) => { state.subdivision = action.payload },
        reducer_employeeInfoList : (state, action) => { state.employeeInfoList = action.payload },
    },
})

export const { reducer_loading } = employeeListSlice.actions
export const { reducer_employeeId } = employeeListSlice.actions
export const { reducer_employeeName } = employeeListSlice.actions
export const { reducer_employeeNameKana } = employeeListSlice.actions
export const { reducer_subdivision } = employeeListSlice.actions
export const { reducer_employeeInfoList } = employeeListSlice.actions

export const reducer_employeeListSlice = employeeListSlice.reducer