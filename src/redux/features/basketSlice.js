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
               state.basket += 1
               state.total += item.price
            }
         })
      },
      decrement: (state, action) => {
         state.products.forEach((item, i) => {
            if (i === action.payload && item.amount > 0) {
               item.amount -= 1
               state.basket -= 1
               state.total -= item.price
            }
         })
      },
      remover: (state, action) => {
         state.total -= state.products[action.payload].price * state.products[action.payload].amount
         state.basket -= state.products[action.payload].amount
         state.products = state.products.filter((item, i) => {
            return i !== action.payload
         })
         state.amount -= 1
      }
   }
})

export default basketSlice.reducer
export const { increment, decrement, remover } = basketSlice.actions