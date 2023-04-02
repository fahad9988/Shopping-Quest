
import { CART_ITEMS_LOADING,CART_ITEMS_ERROR,GET_CART_ITEMS_SUCCESS,ADD_ITEM_TO_CART_SUCCESS,UPDATE_CART_ITEMS_SUCCESS,REMOVE_CART_ITEMS_SUCCESS } from "./cart.types";
import axios from "axios";

export const getCart=()=> async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
try{
let response=await axios.get(`http://localhost:8080/Cart`);
dispatch({type:GET_CART_ITEMS_SUCCESS,payload:response.data})
}catch(e){
dispatch({type:CART_ITEMS_ERROR})
}
}

export const addCart=(item)=> async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
try{
let response=await axios.post("http://localhost:8080/Cart",{
 ...item
});
dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:response.data})
}catch(e){
dispatch({type:CART_ITEMS_ERROR})
}
}

export const updateCart=(id,changes)=>async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
 try{
 let response=await axios.patch(`http://localhost:8080/Cart/${id}`,{
  ...changes,
 });
 dispatch({type:UPDATE_CART_ITEMS_SUCCESS,payload:response.data})
 }catch(e){
 dispatch({type:CART_ITEMS_ERROR})
 }
}

export const removeCart=(id)=> async (dispatch)=>{
 dispatch({type:CART_ITEMS_LOADING});
try{
let response=await axios.delete(`http://localhost:8080/Cart/${id}`);
dispatch({type:REMOVE_CART_ITEMS_SUCCESS,payload:id})
}catch(e){
dispatch({type:CART_ITEMS_ERROR})
}
}




