import ActionType from '../constants/action-type'
export const setProduct=(products)=>{
    return{
        type:ActionType.SET_PRODUCT,
        payload:products
    }
}

export const selectedProduct=(products)=>{
    return{
        type:ActionType.SELECTED_PRODUCT,
        payload:products
    }
}


export const removeProduct=()=>{
    return{
        type:ActionType.REMOVE_PRODUCT,
       
    }
}