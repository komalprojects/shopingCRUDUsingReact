import ActionType from "../constants/action-type";

const initialState={
    products:[]
}

export const productReducer =(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionType.SET_PRODUCT:
            return {...state,products:payload}
    
        default:
            return state

    }
}
export const selectedreducer= (state={},{type,payload})=>{
switch (type) {
    case ActionType.SELECTED_PRODUCT:
        return {...state,...payload}
    case ActionType.REMOVE_PRODUCT:
        return {}  

    default:
        return state
}
}

// export const removeselectedreducer= (state={},{type,payload})=>{
//     switch (type) {
//         case ActionType.REMOVE_PRODUCT:
//             return {}
    
//         default:
//             return state
//     }
//     }