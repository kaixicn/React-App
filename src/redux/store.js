import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './slices/employeeList'

export const store = configureStore({
    reducer: {
        employeeList: reducer,
    },
})

export const ReduxProvider = (props) => {
    return(
        <Provider store={ store }>
            { props.children }
        </Provider>
    )
}

