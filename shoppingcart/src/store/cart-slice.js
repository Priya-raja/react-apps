import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: [],
    totalQuantity: 0,

}

const cartSlice = createSlice({
    name: 'sliceName',
    initialState,
    reducers: {
        addItemToCart(state,action){
            const newItem = action.payload;
            //Check if item is already present
            let  existingItem = state.items.find(item=> item.id === newItem.id);
            if(!existingItem){
                state.item.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name:newItem.title
                });
            }
                else {
                    existingItem++;
                    existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                }
            }

        },
        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem = state.item.find(item => item.id === id);
            if( existingItem.quantity === 1) {
                state.item = state.item.filter(item=> item.id!== id)
            }
            else {
                existingItem.quantity--;
            }

        }
    
    
});

export const cartActions = cartSlice.actions
export default cartSlice