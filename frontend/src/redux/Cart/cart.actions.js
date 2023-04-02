
import { CART_ITEMS_LOADING,CART_ITEMS_ERROR,GET_CART_ITEMS_SUCCESS,ADD_ITEM_TO_CART_SUCCESS,UPDATE_CART_ITEMS_SUCCESS,REMOVE_CART_ITEMS_SUCCESS } from "./cart.types";
import axios from "axios";

export const getCart=()=> async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
try{
let response=await axios.get(`https://navy-blue-colt-slip.cyclic.app/cart`,{
 headers:{
  authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
 }
});
dispatch({type:GET_CART_ITEMS_SUCCESS,payload:response.data.data})
}catch(e){
dispatch({type:CART_ITEMS_ERROR})
}
}

export const addCart=(item)=> async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
try{
let response=await axios.post("https://navy-blue-colt-slip.cyclic.app/cart",{
 ...item
},{
 headers:{
  authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
 }
});
dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:response.data.data1})
}catch(e){
dispatch({type:CART_ITEMS_ERROR})
}
}

export const updateCart=(id,changes)=>async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
 try{
 let response=await axios.patch(`https://navy-blue-colt-slip.cyclic.app/cart/update/${id}`,{
  ...changes,
 },{
  headers:{
   authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
  }
 });
 dispatch({type:UPDATE_CART_ITEMS_SUCCESS,payload:changes})
 }catch(e){
 dispatch({type:CART_ITEMS_ERROR})
 }
}

export const removeCart=(id)=> async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
try{
let response=await axios.delete(`https://navy-blue-colt-slip.cyclic.app/cart/delete/${id}`,{
 headers:{
  authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
 }
});
dispatch({type:REMOVE_CART_ITEMS_SUCCESS,payload:id})
}catch(e){
dispatch({type:CART_ITEMS_ERROR})
}
}




