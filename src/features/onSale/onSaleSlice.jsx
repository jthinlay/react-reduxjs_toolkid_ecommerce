import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action){
            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItem[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = ({...action.payload, cartQuantity: 1})
                state.cartItem.push(tempProduct)
            }
        }
    }
})
export const {addItemToCart} = cartSlice.actions
export default cartSlice.reducer
























// const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id)
//             if(itemIndex >= 0){
//                 state.cartItem[itemIndex].cartQuantity += 1
//             } else {
//                 const tempProduct = {...action.payload, cartQuantity: 1}
//                 state.cartItem.push(tempProduct)
//             }