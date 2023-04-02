import * as types from "./actionType";

const initialState = {
    products:[],
    loading:false,
    error:false,
    activePage: 1,
    perPage: 40
}

export const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case types.GET_MENS_REQUEST:
            return {...state,loading:true}
        case types.GET_MENS_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_MENS_ERROR:
           return{...state,loading:false,error:true}

         case types.GET_WOMENS_REQUEST:
            return {...state,loading:true}
        case types.GET_WOMENS_SUCCESS:
            return {...state,loading:false,products:payload}
        case types.GET_WOMENS_ERROR:
           return{...state,loading:false,error:true}
          case types.HANDLE_PAGE_CHANGE:
            return {...state,loading:false,activePage:payload}
       
        default:
            return state;
    }
}