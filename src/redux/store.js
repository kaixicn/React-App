import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { reducer_employeeListSlice } from './slices/employeeList'
import { reducer_loginSlice } from './slices/login'

export const store = configureStore({
    reducer: {
        employeeList: reducer_employeeListSlice,
        login: reducer_loginSlice
    },
})

export const ReduxProvider = (props) => {
    return(
        <Provider store={ store }>
            { props.children }
        </Provider>
    )
}

