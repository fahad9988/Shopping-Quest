import * as types from "./actionType"
import axios from "axios"
export const getMensData=(search)=>async(dispatch)=>{

    dispatch({type:types.GET_MENS_REQUEST})


    try {
       let r= await axios.get(`https://navy-blue-colt-slip.cyclic.app/men/search?brand=${search}&limit=400`,)
       
       dispatch({type:types.GET_MENS_SUCCESS,payload:r.data})
    } catch (e) {
        dispatch({type:types.GET_MENS_ERROR,payload:e})
    }

}

export const handlePageChange=(newPage)=>{
    return {
        type:types.HANDLE_PAGE_CHANGE,
        payload:newPage
    }
}