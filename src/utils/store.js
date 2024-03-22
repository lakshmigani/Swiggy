import { createSlice,configureStore } from "@reduxjs/toolkit"

let initialState = {
    cartCount :0,
    cartData : []
}
let useSlice = createSlice ({
    name : 'cart',
    initialState ,
    reducers : {
        updateCart:(state,action) => {
            state.cartCount += 1
            },
        updateCartData:(state,action)=>{
            state.cartData.push(action.payload)
        },
        deleteCartData:(state,action)=>{
            state.cartData.pop(action.payload)
        }
        
    }
})

export let { updateCart,updateCartData,deleteCartData } = useSlice.actions
export let store = configureStore({
    reducer: {
        user:useSlice.reducer
    }
})