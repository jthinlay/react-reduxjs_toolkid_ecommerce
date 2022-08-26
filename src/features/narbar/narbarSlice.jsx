import {createSlice} from '@reduxjs/toolkit'
import {onSaleItems} from '../../api/data'

const initialState = onSaleItems.map(item => item.quantity)

const NarbarSlice = createSlice({
    name: 'Narbar',
    initialState,
    reducers: { 
        addProductQuantity: (state) => {
            state =+ 1
        } 
    }
})

export const {addProductQuantity} = NarbarSlice.actions
export default NarbarSlice.reducer
