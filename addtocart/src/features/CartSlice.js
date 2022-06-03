import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemCount : 0,
    totalAmount : 0,
    itemList : {}
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        incr : (state, action)=>{
            if(state.itemList[action.payload.id]){
                state.itemList[action.payload.id] ++                  
                state.itemCount++
                state.totalAmount = state.totalAmount + action.payload.price
            }else{
                state.itemList[action.payload.id] = 1
                state.itemCount++
                state.totalAmount = state.totalAmount + action.payload.price
            }
        },
        decr : (state, action)=>{
            if(state.itemList[action.payload.id] > 0){
                state.itemCount--
                state.totalAmount = state.totalAmount - action.payload.price   
                state.itemList[action.payload.id]--
            }
        },
        clearCart : (state)=>{
            state.itemCount = 0
            state.totalAmount = 0
            state.itemList = {}
        }
    }
    
})

export default cartSlice.reducer
export const {incr, decr, clearCart} = cartSlice.actions

