import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import { addCart, getCart,removeCart } from '../../redux/Cart/cart.actions';
import { Box , Flex, Text,Image, Button, Checkbox, Accordion, AccordionItem ,AccordionButton, AccordionPanel, AccordionIcon, GridItem, Grid, HStack, useToast} from '@chakra-ui/react';
import SelectC from '../../Components/fahad_components/SelectC';
import { getSaveLater,addSaveLater, removeSaveLater } from '../../redux/SaveLater/savelater.actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const toast=useToast();
  // const token=localStorage.getItem("token")||"";
  const navigate=useNavigate();
 
//   if(token){
   
//     toast({
//       title: 'Please Login First.',
//       status: 'warning',
//       duration: 3000,
//       isClosable: true,
//     });
// navigate("/");
    
//   }

const cartData=useSelector((store)=>{
  return store.cart.data
});

const saveLater=useSelector((store)=>{
  return store.saveLater.data
})
console.log(saveLater)

const dispatch=useDispatch();


  React.useEffect(()=>{
dispatch(getCart());
dispatch(getSaveLater());
  },[]);

  let qSum=0;
   cartData.forEach((e)=>{
      qSum=qSum+Number(e.quantity);
    });
  
 

 
    let sum=0;
 
      cartData.forEach((e)=>{
        sum=sum+(e.quantity)*(e.price);
      });
    
   

    const handleCheckout=()=>{
      axios.post(`http://localhost:4500/api/stripe/create-checkout-session`,{
        cartData
      }).then((res)=>{
        if(res.data.url){
          window.location.href=res.data.url;
        }
      }).catch((err)=>{
        console.log(err.message)
      });
    }
   
  
  return (
    <Box p={{xl:"25px 25px" , lg:"15px 15px",base:"0px"}} bgColor={"#EAEDED"} display="flex" gap={{xl:9,lg:6,base:0}} flexDirection={{lg:"row",base:"column"}} >

      <Box bgColor={"white"} p="15px 15px" display={{lg:"none",base:"block"}} mb="20px">
       <Text textAlign={"left"} m="0px" w="100%" fontSize={{md:"2xl",base:"xl"}} fontWeight={500}>{`Subtotal (${qSum} items): `}<span style={{fontWeight:700}}>{`Rs. ${sum}`}</span>
       </Text>
       <Box textAlign={"left"}>
          <Checkbox iconColor='black' size="sm">This will be a gift</Checkbox>
          </Box>
          {cartData.length>0?
          <Button mt="10px" w="100%" size={{md:"md",base:"sm"}} fontSize={{md:"lg",base:"md"}} bgColor="#FFD814" _hover={{bgColor:"black",color:"white"}} onClick={handleCheckout}>Proceed to Buy</Button>
          :
          <Button mt="10px" w="100%" size={{md:"md",base:"sm"}} fontSize={{md:"lg",base:"md"}} bgColor="#FFD814" _hover={{bgColor:"black",color:"white"}} onClick={()=>{
               navigate("/");
          }} >Continue Shopping</Button>}
          

          <Accordion allowToggle mt="20px">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          EMI Available
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text m="0px" w="100%" fontSize={"16px"} textAlign={"left"}>
      Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
      </Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>

      <Box flex="1">

        <Box bgColor={"white"} p="15px 15px" flex="1" >
           <Box >
        <Text m="0px" w="100%" textAlign={"left"} fontSize={{md:"3xl",base:"2xl"}} fontWeight={500}>Shopping Cart</Text>
           </Box>
           {cartData.length>0?<Box display={{md:"flex",base:"none"}} justifyContent="flex-end" >
       <Text >Price</Text>
           </Box>
           :
            null}
           <Box>
      {cartData.length>0?cartData.map((item)=>{
           return <Flex p="20px 0px 20px 10px"   direction={{sm:"row",base:"column"}}  borderTop={"1px solid #DDDDDD"} >
           <Box   flex="0.23"  display="flex" alignItems="center" mb={{sm:"0px",base:"15px"}} >
            <Image m="auto" minW="125px" h="175px" objectFit="cover" src={item.image} />
           </Box>
           <Box   flex="1"  p="0px 0px 0px 10px">
            <Box   display={"flex"}>
              <Box  flex="1" >
              <Text m="0px" w="100%" textAlign={"left"} fontSize={{md:"lg",sm:"md",base:"sm"}} fontWeight={"500"} >{item.product}</Text>
              </Box>
              <Box  flex="0.3" >
           <Text m="0px" w="100%" textAlign={"right"} fontSize={{md:"lg",sm:"md",base:"sm"}} fontWeight={"700"} >{`Rs. ${item.price}`}</Text>
              </Box>
            </Box>
            <Text  m="0px" w="100%" fontSize={"sm"} textAlign="left" fontWeight={400}>{item.brand}</Text>
            
            <Text  m="0px" w="100%" fontSize={"xs"} color="#298342" textAlign="left">In Stock</Text>
            <Text  m="0px" w="100%" mt="3px" mb="3px" fontSize={"sm"} color="#239ED2" textAlign="left" fontWeight={800}>✔prime</Text>
          <Box textAlign={"left"}>
          <Checkbox iconColor='black' size="sm">This will be a gift</Checkbox>
          </Box>

          <Flex mt="5px" >
            <Box  mr="10px">
            <SelectC {...item}/>
            </Box>
            <Box  display={"flex"}  alignItems={"center"}>
              <Box p="0px 10px" borderLeft="1px solid green">
                <Text  m="0px" w="100%" _hover={{cursor:"pointer",textDecoration:"underline"}} fontSize={"xs"} fontWeight={500} color={"#637E85"} onClick={()=>{
                  dispatch(removeCart(item._id))
                }} >Delete</Text>
              </Box>
              <Box p="0px 10px" borderLeft="1px solid green">
                <Text  m="0px" w="100%" _hover={{cursor:"pointer",textDecoration:"underline"}} fontSize={"xs"} fontWeight={500} color={"#637E85"} onClick={()=>{
                  dispatch(addSaveLater(item));
                  dispatch(removeCart(item._id))
                }}>
                  Save for Later</Text>
              </Box>
            </Box>
          </Flex>
            
        
           
        </Box>
      </Flex>
    }):<Text  m="0px" w="100%" fontSize={{md:"2xl",base:"xl"}} fontWeight={600}>No Items Saved in your Cart!</Text>}
           </Box>
           {cartData.length>0? <Box>
      <Text  m="0px" w="100%" textAlign={"right"} fontSize={"lg"} fontWeight={500}>{`Subtotal (${qSum} items): `}<span style={{fontWeight:700}}>{`Rs. ${sum}`}</span>
       </Text>
           </Box>
           :
            null}
        </Box>

        <Box mt="20px" p="15px 15px"  bgColor={"white"}>
     
          <Box>
        <Text  m="0px" w="100%" textAlign={"left"} fontSize={{md:"3xl",base:"2xl"}} fontWeight={500}>Saved for Later</Text>
          </Box>

          <Box>
      {
        saveLater.length>0?
        <Grid  
     
     templateColumns={{
       base: "repeat(1,1fr)",
       sm: "repeat(2,1fr)",
       md: "repeat(3,1fr)",
       lg: "repeat(3,1fr)",
       xl:"repeat(4,1fr)"
     }}
     gap="10px"
     mt="15px"
     >
   {
     saveLater.map((item)=>{
       return <GridItem m="auto" p="10px" minW="210px" maxWidth="250px" key={item.id} position="relative" border={"1px solid #E7E7E7"}>
     
          <Image
           m="auto"
           src={item.image}
           width="200px"
           height="230px"
           alt="image"
         />
         <Text  m="0px" w="100%" color="black" textAlign={"left"} noOfLines={1} mt="5px" fontSize="16px" fontWeight={500} >{item.product}</Text>
         <Text  m="0px" w="100%" color="black" fontSize="14px" textAlign={"left"} noOfLines={1}>{item.brand}</Text>
         <HStack display="flex"   alignItems="center" flexWrap="wrap">
         <Text  m="0px"  fontSize="13px" color="#D6D0DB" textDecoration="line-through">
             Rs. {item.strike}
           </Text>
         <b  fontSize="13px">Rs. {item.price}</b>
         </HStack>
         <Text  m="0px" w="100%" mt="2px" mb="3px" fontSize={"sm"} color="#239ED2" textAlign="left" fontWeight={800}>✔prime</Text>
         <Button bgColor={"white"} border="1px solid black" _hover={{bgColor:"black",color:"white"}} size="xs" w="100%" onClick={()=>{
          dispatch(addCart(item));
          dispatch(removeSaveLater(item._id))
         }}>Move to Cart</Button>
         <Text  m="0px" w="100%" textAlign={"left"} _hover={{cursor:"pointer",textDecoration:"underline"}} fontSize={"xs"} fontWeight={500} color={"#637E85"} mt="5px" onClick={()=>{
                  dispatch(removeSaveLater(item._id))
                }} >Delete</Text>
         </GridItem>
     })
   }
  </Grid>:<Text  m="0px" w="100%" fontSize={"2xl"} fontWeight={600}>No Items Saved for Later!</Text>
      }
     
          </Box>
        </Box>

      </Box>
     
    

      <Box bgColor={"#EAEDED"} display={{lg:"block",base:"none"}} flex={{xl:"0.35",lg:"0.4"}} >

      <Box bgColor={"white"} p="15px 15px">
       <Text textAlign={"left"} fontSize={"lg"} fontWeight={500}>{`Subtotal (${qSum} items): `}<span style={{fontWeight:700}}>{`Rs. ${sum}`}</span>
       </Text>
       <Box textAlign={"left"}>
          <Checkbox iconColor='black' size="sm">This will be a gift</Checkbox>
          </Box>
          {cartData.length>0?
          <Button mt="10px" w="100%" size="sm" bgColor="#FFD814" _hover={{bgColor:"black",color:"white"}} onClick={handleCheckout}>Proceed to Buy</Button>
          :
          <Button mt="10px" w="100%" size="sm" bgColor="#FFD814" _hover={{bgColor:"black",color:"white"}} onClick={()=>{
               navigate("/");
          }} >Continue Shopping</Button>}
          

          <Accordion allowToggle mt="20px">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          EMI Available
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Text textAlign={"left"}>
      Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
      </Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>
      <Box bgColor={"white"} mt="20px" p="15px 15px">
      <Text textAlign={"left"} fontSize="14px" >Ad.</Text>
      <Image  src="https://images.unsplash.com/photo-1506106487742-2baf007edcfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVpZ2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <Text mt="10px" textAlign={"left"} fontSize="14px" fontWeight={500}>Book Hotels at lowest prices on Make my Trip.</Text>
      </Box>
     
      </Box>

    </Box>
  )
}

export default Cart