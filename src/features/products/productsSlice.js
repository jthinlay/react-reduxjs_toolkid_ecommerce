import { createSlice} from "@reduxjs/toolkit";
import {popularProducts} from '../../api/data'

const initialState = popularProducts

const productsSlice = createSlice({
    name:'Products',
    initialState,
    reducers: {
        products: (state) => state.products
    }
})

export const {products} = productsSlice.actions
export default productsSlice.reducer