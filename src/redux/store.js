import { configureStore } from '@reduxjs/toolkit'
import State_management_APP from './features/manageState'
export const store = configureStore({
    reducer: {
        app : State_management_APP
    },
})