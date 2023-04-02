
import { SAVE_LATER_ITEMS_ERROR,SAVE_LATER_ITEMS_LOADING,GET_SAVE_LATER_ITEMS_SUCCESS,ADD_ITEM_TO_SAVE_LATER_SUCCESS,REMOVE_SAVE_LATER_ITEMS_SUCCESS } from "./savelater.types";
import axios from "axios";

export const getSaveLater=()=> async (dispatch)=>{
 dispatch({type:SAVE_LATER_ITEMS_LOADING});
try{
let response=await axios.get(`http://localhost:8080/SaveLater`);
dispatch({type:GET_SAVE_LATER_ITEMS_SUCCESS,payload:response.data})
}catch(e){
dispatch({type:SAVE_LATER_ITEMS_ERROR})
}
}

export const addSaveLater=(item)=> async (dispatch)=>{
 dispatch({type:SAVE_LATER_ITEMS_LOADING});
try{
let response=await axios.post("http://localhost:8080/SaveLater",{
 ...item
});
dispatch({type:ADD_ITEM_TO_SAVE_LATER_SUCCESS,payload:response.data})
}catch(e){
dispatch({type:SAVE_LATER_ITEMS_ERROR})
}
}


export const removeSaveLater=(id)=> async (dispatch)=>{
 dispatch({type:SAVE_LATER_ITEMS_LOADING});
try{
let response=await axios.delete(`http://localhost:8080/SaveLater/${id}`);
dispatch({type:REMOVE_SAVE_LATER_ITEMS_SUCCESS,payload:id})
}catch(e){
dispatch({type:SAVE_LATER_ITEMS_ERROR})
}
}




