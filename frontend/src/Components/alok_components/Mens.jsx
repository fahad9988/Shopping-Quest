import React, { useEffect ,useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getMensData } from '../../redux/MensWomens/actions'
import { Flex,Box,Grid, GridItem,SimpleGrid,VStack,HStack, Center, CheckboxGroup, Stack, Checkbox, Heading } from '@chakra-ui/react'
import MensCard from './MensCard'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import FilterandSort from './FilterandSort'
import Pagination from './Pagination'
const Mens = () => {
   const [brand,setBrand]=useState([])
   const [page,setPage]=useState(Number(1))
   const [val,setVal]=useState(true)
    const products=useSelector((store)=>store.mens.products.data)
    const activePage=useSelector((store)=>store.mens.activePage)
    const perPage=useSelector((store)=>store.mens.perPage)
    const dispatch=useDispatch()
    const location=useLocation()
    //const navigate=useNavigate()
    const [searchParams]=useSearchParams()
    

    useEffect(()=>{
      setBrand(products)
    },[products])

   
    useEffect(()=>{
      dispatch(getMensData(brand))
    },[])
  

    if(brand){
      console.log(brand,page)
    }

    const handleFilterChange=(e)=>{
    
      
       let data= products && products.filter((el)=>{
              if (el.brand===e.target.value){
               
                return el
               
              }
               
             
            })

          
      if(val===true){
          setBrand(data) 
      } else{
        setBrand(products)
      }

         
   }

   const handleClick=()=>{
    setVal(!val)
   }
  

  return (
    <>
    <Flex style={{justifyContent:"space-between",alignItems:"flex-start",marginTop:"20px",margin:"3%"}}>
      
    
      <Box   style={{ border:"1px solid red",padding:"10px",borderRadius:"5px",backgroundColor:"white",marginTop:"20px"}} >
  

  <Heading fontSize={20} textAlign={'left'} >Brand</Heading>

  <div style={{textAlign:"left"}} value={brand} onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
  <input type="checkbox" id="sports" name="interest" value="Roadster" style={{marginRight:"2px"}} />
     <label>
       Roadster
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Dennis Lingo" style={{marginRight:"2px"}} />
       Dennis Lingo
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Louis Philippe Sport" style={{marginRight:"2px"}}/>
       Louis Philippe Sport
     </label>
    </div>

     <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="HIGHLANDER" style={{marginRight:"2px"}}/>
       HIGHLANDER
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="HRX by Hrithik Roshan" style={{marginRight:"2px"}}/>
       HRX by Hrithik Roshan
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="ADIDAS" style={{marginRight:"2px"}}/>
       ADIDAS
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Mast & Harbour" style={{marginRight:"2px"}}/>
       Mast & Harbour
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="HERE&NOW" style={{marginRight:"2px"}} />
       HERE&NOW
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="MANQ" style={{marginRight:"2px"}}/>
       MANQ
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Jompers" style={{marginRight:"2px"}}/>
       Jompers
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Allen Solly" style={{marginRight:"2px"}}/>
       Allen Solly
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="INVICTUS" style={{marginRight:"2px"}} />
       INVICTUS
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Powerlook" style={{marginRight:"2px"}} />
       Powerlook
     </label>
   </div>


   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Van Heusen" style={{marginRight:"2px"}} />
       Van Heusen
     </label>
   </div>

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="WROGN" style={{marginRight:"2px"}}/>
       WROGN
     </label>
   </div>
   

   <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="LOCOMOTIVE
" style={{marginRight:"2px"}} />
       LOCOMOTIVE

     </label>
   </div>
  
      </Box>
      <Box width="75%"  m="auto"  justifyContent="center">
<SimpleGrid minChildWidth={250}   > 
       
{/* {brand && brand.map((item)=>( 
 
<MensCard  key={item._id} {...item}  />

))} */}


{brand && brand.filter((_,index)=>{
  return(
    index>=perPage*(activePage-1)&&
    index<perPage*activePage
  );
})
.map((item)=>{
  return <MensCard  key={item._id} {...item}  />
})
}
</SimpleGrid>
</Box>
    </Flex>
    <Box >
    <Pagination />
  </Box>
  </>
  )
}

export default Mens