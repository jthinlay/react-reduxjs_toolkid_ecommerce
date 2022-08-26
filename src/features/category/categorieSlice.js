import {createSlice} from '@reduxjs/toolkit'
import {categories} from '../../api/data'

const initialState = categories

const CategoriesSlice = createSlice({
    name:'Category',
    initialState,
    reducer:{
        category: (state) => state.categories
    }
})

export const {category} = CategoriesSlice.actions
export default CategoriesSlice.reducer