import * as types from "./actionType"
import axios from "axios"
export const getMensData=(queryParams)=>async(dispatch)=>{
    console.log("queryParams", queryParams)
    dispatch({type:types.GET_MENS_REQUEST})


    try {
       let r= await axios.get(`https://navy-blue-colt-slip.cyclic.app/men/search?limit=400`,queryParams)
      
       dispatch({type:types.GET_MENS_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_MENS_ERROR,payload:e})
    }

}

export const getWomenData=(queryParams)=>async(dispatch)=>{

    dispatch({type:types.GET_WOMENS_REQUEST})


    try {
       let r= await axios.get(`https://navy-blue-colt-slip.cyclic.app/women/search?limit=400`,queryParams)
       
       dispatch({type:types.GET_WOMENS_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_WOMENS_ERROR,payload:e})
    }

}

export const handlePageChange=(newPage)=>{
    return {
        type:types.HANDLE_PAGE_CHANGE,
        payload:newPage
    }
}