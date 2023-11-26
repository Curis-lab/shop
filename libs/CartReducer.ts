import { ActionTypes } from "./Types"



export const CartReducer = (dataStore:any, action:any)=>{    
    
    let newStore = {cart:[],cartItems:0, prices:0, ...dataStore}
    
    switch(action.type){

        case ActionTypes.ADD_CART:
            
            let p = action.payload.product;
            let q= action.payload.quantity;

            let existing = newStore.cart.find((i:any)=>i.product.id === p.id);

            if(existing ){
                newStore.cartItems += q;
                newStore.cart.map((item:any)=>{
                    if(item.product.id === p.id){
                        item.quantity += q;
                    }
                    return null;
                })
            }else{
                newStore.cart = [...newStore.cart,action.payload]
            }
            newStore.cartItems += q;
            newStore.prices += q * p.price;
            return newStore

        case ActionTypes.REMOVE_ITEM:
            let item_removed = newStore.cart.filter((item:any)=> item.product.id !== action.payload.product.id);
            newStore.cart = [...item_removed]
            return newStore
        
        default:
            return dataStore || {}
    }
}