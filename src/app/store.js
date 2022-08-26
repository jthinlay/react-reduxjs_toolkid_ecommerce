import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/couterSlice'
import sliderReducer from '../features/slider/sliderSlice'
import productsReducer from '../features/products/productsSlice'
import categoryReducer from '../features/category/categorieSlice'
import categoryProductsReducer from '../features/category/categoryProducts/categoryProductsSlice'
import cartReducer from '../features/onSale/onSaleSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        slider: sliderReducer,
        products: productsReducer, 
        categories: categoryReducer,
        categoryProducts: categoryProductsReducer,
        cart: cartReducer
    },
})
