import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : 0
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increate: (state) => {
            state.value += 1
        }, 
        decreament: state => {
            state.value -= 1
        },
        increatementByAmout: (state, action) => {
            state.value += action.payload
        }
    }

})
export const {increate, decreament, increatementByAmout} = CounterSlice.actions
export default CounterSlice.reducer