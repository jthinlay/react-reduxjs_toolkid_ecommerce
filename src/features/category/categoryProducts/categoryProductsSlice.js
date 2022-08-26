import {createSlice} from '@reduxjs/toolkit'
import {categoryProducts} from '../../../api/data'

const initialState = categoryProducts

const CategoryProducts = createSlice({
    name: 'CategoryProducts',
    initialState,
    reducer: {
        categoryProductItems: state => state.categoryProducts
    }
})

export const {categoryProductItems} = CategoryProducts.actions
export default CategoryProducts.reducer