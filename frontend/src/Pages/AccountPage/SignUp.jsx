import './newaccount.css'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import axios  from 'axios'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Tooltip,
  useToast,
  Image

} from '@chakra-ui/react'

const initialState = {
  name: "",
  email: "",
  password: "",
  number: ""
}

export default function NewAccount() {

  const [erroi, setErr] = useState(false)
  const [focus, setFocus] = useState(false)

  const toast = useToast()
  const navigate=useNavigate()

  const [user, setUser] = useState(initialState)
  let nam, val
  const handleInputChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)

    nam = e.target.name;
    val = e.target.value
    setUser({ ...user, [nam]: val })
  }
  const handleClick = () => {
    
    setFocus(true)
  
      
    if (user.name === "" && user.email === "" && user.password === ""&& user.number==="") {
      setErr(true)
      setFocus(false)
      alert("Please Fill The details")
    
    }else{ axios.post(`https://navy-blue-colt-slip.cyclic.app/user/register`, user).then(res=>{
      console.log(res);
      
          {
          toast({
              title: 'User Registration Successful',
              position: 'top',
              status: 'success',
              description: `${res.data.msg}`,
            })
            setFocus(false)
            navigate("/login");
            setUser(initialState);
      }
      

  }).catch(error=> {
    console.log(error)
    toast({
      title: 'User Registration Failed',
      position: 'top',
      status:"error",
      description: `${error.response.data.msg}`,
    })
    setFocus(false)
    setUser(initialState);
    return ;
  }
    );
  
    }
  }



  return (
    <div> 
    <div className='background1'>
        
   


        <div className='box111' >
            <img src="https://i.imgur.com/FLcw52K.png" alt="" />
      
      
        <FormControl isInvalid={erroi}>
        <FormLabel>Name</FormLabel>
      <Input type='text' name='name' value={user.name} onChange={handleInputChange} />
      {erroi? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel>Email</FormLabel>
      <Input type='email' name='email' value={user.email} onChange={handleInputChange} />
      {erroi? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
<FormLabel>Number</FormLabel>
      <Input type='number' name='number' value={user.number} onChange={handleInputChange} />
      {erroi? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}

<FormLabel>Password</FormLabel>
      <Input type='password' name='password' value={user.password} onChange={handleInputChange} />
      {erroi? (
        <FormHelperText>
          Enter the Password
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
        <Button onClick={handleClick} isLoading={focus} loadingText="Submitting" colorScheme="pink" variant="outline" style={{marginTop:'20px'}}>Sign Up</Button>
    <br />
    <Link>
    Already logged in ? <Link to='/login' style={{color:'blue'}}>Login</Link>
    </Link>
    <div style={{fontSize:"12px"}}>By Creating an account,you agree to <br /> <span style={{color:'green'}}>terms and condition</span>,the payroll and our privacy policy</div>
    </FormControl>
        </div>
  


            
            

    </div>
    
    </div>
  )
}