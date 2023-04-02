
import { SAVE_LATER_ITEMS_ERROR,SAVE_LATER_ITEMS_LOADING,GET_SAVE_LATER_ITEMS_SUCCESS,ADD_ITEM_TO_SAVE_LATER_SUCCESS,REMOVE_SAVE_LATER_ITEMS_SUCCESS } from "./savelater.types";
import axios from "axios";

export const getSaveLater=()=> async (dispatch)=>{
 dispatch({type:SAVE_LATER_ITEMS_LOADING});
try{
let response=await axios.get(`https://navy-blue-colt-slip.cyclic.app/cart/saveget`,{
 headers:{
  authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
 }
});
dispatch({type:GET_SAVE_LATER_ITEMS_SUCCESS,payload:response.data.data})
}catch(e){
dispatch({type:SAVE_LATER_ITEMS_ERROR})
}
}

export const addSaveLater=(item)=> async (dispatch)=>{
 dispatch({type:SAVE_LATER_ITEMS_LOADING});
try{
let response=await axios.post("https://navy-blue-colt-slip.cyclic.app/cart/save",{
 ...item
},{
 headers:{
  authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
 }
});
dispatch({type:ADD_ITEM_TO_SAVE_LATER_SUCCESS,payload:response.data.data1})
}catch(e){
dispatch({type:SAVE_LATER_ITEMS_ERROR})
}
}


export const removeSaveLater=(id)=> async (dispatch)=>{
 dispatch({type:SAVE_LATER_ITEMS_LOADING});
try{
let response=await axios.delete(`https://navy-blue-colt-slip.cyclic.app/cart/savedelete/${id}`,{
 headers:{
  authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
 }
});
dispatch({type:REMOVE_SAVE_LATER_ITEMS_SUCCESS,payload:id})
}catch(e){
dispatch({type:SAVE_LATER_ITEMS_ERROR})
}
}




