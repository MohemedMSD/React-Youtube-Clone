import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Dark_Mode : false
}
export const State_management_APP = createSlice({
    name: 'app',
    initialState,
    reducers: {
        Change_Mode_APP: (state, action) => {
            state.Dark_Mode = !action.payload
        },
    },
})


export const { Change_Mode_APP } = State_management_APP.actions
export const Select_Mode_APP = (state) => state.app.Dark_Mode
export default State_management_APP.reducer