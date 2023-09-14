import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../data/Data";

const initialState = {
   products: storeData,
   total: 0,
   amount: storeData.length,
   basket: 0,
}

const basketSlice = createSlice({
   name: "basket",
   initialState,
   reducers: {
      increment: (state, action) => {
         state.products.forEach((item, i) => {
            if (i === action.payload) {
               item.amount += 1

            }
         })
      },
      decrement: (state, action) => {
         state.products.forEach((item, i) => {
            if (i === action.payload && item.amount > 0) {
               item.amount -= 1

            }
         })
      },
      remover: (state, action) => {
         state.products = state.products.filter((item, i) => {
            return i !== action.payload
         })
         state.amount -= 1
      },
      updateTotal: (state) => {
         let total = 0
         let basket = 0

         state.products.forEach((item) => {
            total += item.amount * item.price
            basket += item.amount
         })
         state.total = total
         state.basket = basket

      }
   }
})

export default basketSlice.reducer
export const { increment, decrement, remover, updateTotal } = basketSlice.actions