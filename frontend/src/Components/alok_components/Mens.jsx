import React, { useEffect ,useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getMensData } from '../../redux/MensWomens/actions'
import { Flex,Box,Grid, GridItem,SimpleGrid,VStack,HStack, Center, CheckboxGroup, Stack, Checkbox } from '@chakra-ui/react'
import MensCard from './MensCard'
import { useNavigate } from 'react-router-dom'
const Mens = () => {
   const [brand,setBrand]=useState([])
    const products=useSelector((store)=>store.mens.products)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
       dispatch(getMensData())
    },[])
       
    useEffect(()=>{
      // if(products.data){
        setBrand(products.data)
        
      //}
    },[brand])
    if(brand){

      console.log(brand)
    }
    
    
    // if(products){
    //   setBrand(products)
    //   // console.log(brand)
    // }
      
    // const handleFilterChange=(e)=>{
    
    //       let filtered=products.data && products.data.filter((el)=>{
    //           return el.brand===e.target.value
    //       })
           
    //       setBrand(filtered)
    //       console.log(filtered)
    //       }
    

  return (
    <Flex style={{ margin:"auto",justifyContent:"center",alignItems:"center",marginTop:"20px",marginLeft:"3%"}}>
      <Box display="block" style={{border:"1px solid red",marginTop:"-2100px",padding:"10px",borderRadius:"5px",backgroundColor:"pink"}} >
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
   <div value={brand} >
      <label>
        <input type="checkbox" id="sports" name="interest" value="Roadster" />
        Roadster
      </label>
    </div>

    </Box>
      <Box width="70%"  m="auto"  justifyContent="center">
      <SimpleGrid minChildWidth={250}   >
       
{  brand.map((item)=>( 
 
<MensCard  key={item._id} {...item}  />

))}
</SimpleGrid>
</Box>
    </Flex>
  )
}

export default Mens