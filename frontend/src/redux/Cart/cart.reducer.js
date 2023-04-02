import { GET_CART_ITEMS_SUCCESS,ADD_ITEM_TO_CART_SUCCESS,UPDATE_CART_ITEMS_SUCCESS,REMOVE_CART_ITEMS_SUCCESS } from "./cart.types";

const InitalState = {
  data: [],
};
export const cartReducer = (state = InitalState,{type,payload}) => {
  switch(type){


    case GET_CART_ITEMS_SUCCESS:return {
      ...state,
      data:payload
    };
    case ADD_ITEM_TO_CART_SUCCESS:return {
      ...state,
      data:[...state.data,payload]
    };
    case REMOVE_CART_ITEMS_SUCCESS:
      let deleted=state.data.filter((item)=>{
        return item.id!=payload
      })
    return{
...state,
data:deleted
    };
    case UPDATE_CART_ITEMS_SUCCESS:
      let updated=state.data.map((item)=>{
      return item.id==payload.id?{...payload}:item
    })
  return{
...state,
data:updated
  };
  
    default:return state;
  }
};
