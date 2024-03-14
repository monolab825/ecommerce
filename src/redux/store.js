import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    
  },
})
export default store;