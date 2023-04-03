import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  useToast,
  color,
  background,
  Image
  
} from '@chakra-ui/react'
import './newaccount.css'
import axios from 'axios'
import { useState } from 'react'
import { useContext } from "react";


import { Link, useNavigate } from 'react-router-dom'
import { AuthrizeContext } from '../../Context/AuthContextProvider'
const intialState={
  email:"",
  password:""
}


export const Login = () => {
  let Login = {};
  const [user, setUser] = useState(intialState)
    const[load,setLoad]=useState(false)
    const toast =useToast()
const navigate=useNavigate()
let {isAuth,setIsAuth}= useContext(AuthrizeContext);
    let nam,val
    const handleInputChange = (e) => {
      e.preventDefault()
      console.log(e.target.value)
  
      nam = e.target.name;
      val = e.target.value
      setUser({ ...user, [nam]: val })
    }

    const handleClic=()=>{
      if(user.email===""|| user.password==""){
        alert("Please Fill all the inputs")
        return
      }
      setLoad(true)
      axios.post('https://navy-blue-colt-slip.cyclic.app/user/login',user).then(res=>{
        console.log(res.data)
      if(res.data.token){
      toast({
        title: 'Login Succesfull.',
        position: 'top',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      setLoad(false)
      localStorage.setItem('token',JSON.stringify(res.data.token))
      localStorage.setItem('name',JSON.stringify(res.data.user_details.name))
      setIsAuth(true)
      navigate("/");

      
    }else{
       toast({
          title: 'Login Failed.',
          position: 'top',
          description:`${res.data.msg}`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
        setLoad(false)

    }

      }).catch(err=>{
        console.log(err)
        toast({
          title: 'Login Failed.',
          description:`${err.response.data.msg}`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
        setLoad(false)


      })


    }

  return (
    <div>

<div className='background1'>
        
   


        <div className='box111' >
            <img src="https://i.imgur.com/FLcw52K.png" alt="" />
      
      
        <FormControl >
       
      <FormLabel>Email</FormLabel>
      <Input type='email' name='email' value={user.email} onChange={handleInputChange} />
      

<FormLabel>Password</FormLabel>
      <Input type='password' name='password' value={user.password} onChange={handleInputChange} />
     
        <Button onClick={handleClic} isLoading={load} loadingText="Submitting" colorScheme="pink" variant="outline" style={{marginTop:'20px'}}>Sign In</Button>
    <br />
    <br />
    
    <Link>If not registerd ,<Link style={{color:"blue"}} to={'/signup'}>Register</Link></Link>

    <br />
    <br />
    <Link>
    Admin <Link to='/loginadmin' style={{color:"blue"}}>Click Here to Login</Link>
    </Link>

        </FormControl>
        </div>
      </div>
  


    </div>
  )
}
