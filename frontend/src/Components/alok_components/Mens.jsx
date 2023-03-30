import React, { useEffect ,useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getMensData } from '../../redux/MensWomens/actions'
import { Flex,Box,Grid, GridItem,SimpleGrid,VStack,HStack, Center, CheckboxGroup, Stack, Checkbox } from '@chakra-ui/react'
import MensCard from './MensCard'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import FilterandSort from './FilterandSort'
const Mens = () => {
   const [brand,setBrand]=useState([])
   const [val,setVal]=useState(true)
    const products=useSelector((store)=>store.mens.products.data)
    const dispatch=useDispatch()
    const location=useLocation()
    //const navigate=useNavigate()
    const [searchParams]=useSearchParams()
    // useEffect(()=>{
     
    //   if((products && products.length===0) ||location){
      
    //   const getProductsParam={
    //     params:{
    //       brand:searchParams.getAll('filter')
    //     }
    //   }
    // // console.log(getProductsParam)
     
    //     dispatch(getMensData(getProductsParam))
       
      
    // }
    // },[location.search])

    useEffect(()=>{
      setBrand(products)
    },[products])

   
    useEffect(()=>{
      dispatch(getMensData(brand))
    },[])
  
    // const handleChange=(e)=>{
    //   setSortProduct(e.target.value)
    //   }

    if(brand){
      console.log(brand)
    }

    
    
    // useEffect(()=>{
    //    if(products.data.length==0){
    //     setBrand(products.data)
        
    //   }
    // },[])


    // if(brand){

    //   //console.log(brand)
    // }
    
    
    // if(products){
    //   setBrand(products)
    //   // console.log(brand)
    // }
   
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
  //console.log(x)

  return (
    <Flex style={{ margin:"auto",justifyContent:"center",alignItems:"center",marginTop:"20px",marginLeft:"3%"}}>
      <Box   style={{border:"1px solid red",padding:"10px",borderRadius:"5px",backgroundColor:"white",marginTop:"0px",position:"sticky",zIndex:"1"}} >
   {/* <CheckboxGroup value={brand} onChange={handleFilterChange} >
    <Stack>
      <Checkbox value="Roadster" >Roadster</Checkbox>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
    </Stack>
   </CheckboxGroup> */}
   {/* onChange={(e)=>handleFilterChange(e)} */}

   

   <div style={{textAlign:"left"}} value={brand} onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
      <label>
        <input type="checkbox" id="sports" name="interest" value="Roadster" />
        Roadster
      </label>
    </div>

    <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
      <label>
        <input type="checkbox" id="sports" name="interest" value="Dennis Lingo" />
        Dennis Lingo
      </label>
    </div>

    <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
      <label>
        <input type="checkbox" id="sports" name="interest" value="Louis Philippe Sport" />
        Louis Philippe Sport
      </label>
     </div>

      <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
      <label>
        <input type="checkbox" id="sports" name="interest" value="HIGHLANDER" />
        HIGHLANDER
      </label>
    </div>

    <div style={{textAlign:"left"}} value={brand}  onClick={handleClick} onChange={(e)=>handleFilterChange(e)} >
      <label>
        <input type="checkbox" id="sports" name="interest" value="HRX by Hrithik Roshan" />
        HRX by Hrithik Roshan
      </label>
    </div>

  

    </Box>
      <Box width="70%"  m="auto"  justifyContent="center">
<SimpleGrid minChildWidth={250}   > 
       
{brand && brand.map((item)=>( 
 
<MensCard  key={item._id} {...item}  />

))}
</SimpleGrid>
</Box>
    </Flex>
  )
}

export default Mens