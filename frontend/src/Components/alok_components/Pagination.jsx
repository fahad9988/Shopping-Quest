import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { handlePageChange } from '../../redux/MensWomens/actions'
import "./Css/Pagination.css"


const Pagination = () => {
    const products=useSelector((store)=>store.mens.products.data)
    const activePage=useSelector((store)=>store.mens.activePage)
    const perPage=useSelector((store)=>store.mens.perPage)
    const dispatch=useDispatch()
    const totalPages=Math.ceil(products?.length/perPage)
    const [searchParams,setSearchParams]=useSearchParams()
    const currentPageFormParams=searchParams.get("page")

    const handleChange=(newPage)=>{
        dispatch(handlePageChange(newPage))
        const params={
            page:newPage
        }

        setSearchParams(params)
    }

   useEffect(()=>{

    if(Number(currentPageFormParams)){
        dispatch(handlePageChange(Number(currentPageFormParams)))
    }
   },[])

  return (
    <div className="paginationWrapper" data-testid='paginationWrapper'>
    {
        activePage!==1 && (
            <button
            className="prevBtn"
            data-testid='prevBtn'
            onClick={()=>handleChange(activePage-1)}
            >
                Prev
            </button>
        )
    }

{totalPages && Array(totalPages)
.fill("")
.map((item,index)=>{
    return (
        <button
        key={index}
        className={index+1===activePage ? `activeBtn`:""}
        data-testid="btn"
        onClick={()=>handleChange(index+1)}
        >
           {index+1}
        </button>
    )
})
}
    {
        activePage!==totalPages && (
            <button
            className="nextBtn"
          data-testid='nextBtn'
            onClick={()=>handleChange(activePage+1)}
            >
                Next
            </button>
        )
    }
    </div>
  )
}

export default Pagination