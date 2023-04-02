import { SAVE_LATER_ITEMS_ERROR,SAVE_LATER_ITEMS_LOADING,GET_SAVE_LATER_ITEMS_SUCCESS,ADD_ITEM_TO_SAVE_LATER_SUCCESS,REMOVE_SAVE_LATER_ITEMS_SUCCESS } from "./savelater.types";

const InitalState = {
  data: [],
};
export const saveLaterReducer = (state = InitalState,{type,payload}) => {
  switch(type){


    case GET_SAVE_LATER_ITEMS_SUCCESS:return {
      ...state,
      data:payload
    };
    case ADD_ITEM_TO_SAVE_LATER_SUCCESS:return {
      ...state,
      data:[...state.data,payload]
    };
    case REMOVE_SAVE_LATER_ITEMS_SUCCESS:
      let deleted=state.data.filter((item)=>{
        return item._id!=payload
      })
    return{
...state,
data:deleted
    };
   
  
    default:return state;
  }
};
