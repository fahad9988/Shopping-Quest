import * as types from "./actionType"
import axios from "axios"
export const getMensData=(search)=>async(dispatch)=>{

    dispatch({type:types.GET_MENS_REQUEST})


    try {
       let r= await axios.get(`https://navy-blue-colt-slip.cyclic.app/men/search?brand=${search}`,)
       
       dispatch({type:types.GET_MENS_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_MENS_ERROR,payload:e})
    }

}


export const getFoodData=(sort)=>async(dispatch)=>{

    dispatch({type:types.GET_WOMENS_REQUEST})


    try {
       let r= await axios.get(`https://alok-verma-rct.onrender.com/fooditem?_sort=price&_order=${sort}`)
       
       dispatch({type:types.GET_WOMENS_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_WOMENS_ERROR,payload:e})
    }

}