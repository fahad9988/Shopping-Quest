import { Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { getCart } from '../../redux/Cart/cart.actions';

const Success = () => {
  const navigate=useNavigate();
  const cartData=useSelector((store)=>{
return store.cart.data
  });
  const dispatch=useDispatch();
  console.log(cartData)

  useEffect(()=>{
   dispatch(getCart());
setTimeout(()=>{
navigate("/");
},3000);



      axios.delete("https://navy-blue-colt-slip.cyclic.app/cart/put",{
       headers:{
        authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
       }
      }).then((res)=>{
       console.log(res.data)
      });
  },[]);

  axios.post(`https://navy-blue-colt-slip.cyclic.app/cart/orders`,cartData,{
 headers:{
  authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
 }
}).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err.message)
      });  
  return (
    <div>
      <Heading mt="30px">Your Payment was successfull!</Heading>
      <Image h="300px"  m="auto" src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif" alt="ima"/>
    </div>
  )
}

export default Success