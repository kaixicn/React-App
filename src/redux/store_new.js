import { Provider } from 'react-redux'
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        store_loading:false,
        store_employeeId:'',
        store_employeeNameKanji:'',
        store_employeeNameKatakana:'',
        store_subdivision:'',
        store_employee_list:[]
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        reducer_loading:(state,action)=>{
            state.state_loading=action.payload
        }
    },
})

export const { increment, decrement, incrementByAmount,reducer_loading } = counterSlice.actions

export const reducer =counterSlice.reducer

export const store= configureStore({
    reducer: {
        counter: reducer,
    },
})


export const ReduxProvider=(props)=>{
    return <Provider store={store}>
        {props.children}
    </Provider>
}

