import {createSlice} from '@reduxjs/toolkit'
import {SliderItems} from '../../api/data'

const initialState = SliderItems

const SliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers:{
        sliders: (state) => state.slider
    }
})

export const {sliders} = SliderSlice.actions

export default SliderSlice.reducer