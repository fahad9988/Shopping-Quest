import { Box,Image, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import React from 'react'
import {SearchIcon,HamburgerIcon} from "@chakra-ui/icons"

import {
    useDisclosure,
    Button,
   
    Drawer,
    DrawerBody,
    
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import style from "../../Style/Navbar.module.css"
const Navabr = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
  return (
    <div>
      <Box className={style.navbar}>
        <Link to="/">
          <div className={style.logo}>
        <Image  src='https://i.imgur.com/FLcw52K.png' alt="xx"/>
        <Image src="https://i.imgur.com/5Fo8X7t.png" alt="xx"/>
        </div>
        </Link>
        <InputGroup>
    <InputLeftAddon className={style.addon} children='All' />
    <Input className={style.input} type='text' placeholder='Search Amazon.in'  backgroundColor="white" border="4px solid #f4b666" />
  <SearchIcon className={style.search}/>
  </InputGroup>
  
      <Link to="/login" className={style.login} >
     Hello sign in
      Account & List
      </Link>
      <Link to="/return" className={style.returns}>Return & orders</Link>
      <Link className={style.cart} to="/cart">Cart</Link>
      </Box>
      <Box className={style.drawer}>
      
 


     
 

    <>
     
      <Button className={style.btton} onClick={onOpen} backgroundColor="#232f3e" > <HamburgerIcon/>
      All
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' className={style.drawer1}>Trending</DrawerHeader>
          <DrawerBody className={style.p}>
            <p>Best Sellers</p>
            <br />
            <p>New Release</p>
            <br />
            <p >Movie Shakers</p>
           
          </DrawerBody >
          <DrawerHeader borderBottomWidth='1px' className={style.drawer1}>Digital content Devices</DrawerHeader>
          <DrawerBody className={style.p}>
            <p>Echo Alexa</p>
            <br />
            <p>Fire TV</p>
            <br />
            <p >Amazon Prime Video</p>
            <br />
            <p >Amazon Prime Music</p>
           
          </DrawerBody >
          <DrawerHeader borderBottomWidth='1px' className={style.drawer1}>Shop By Category</DrawerHeader>
          <DrawerBody className={style.p}>
            <p>Mobile</p>
            <br />
            <p>TV Appliances</p>
            <br />
            <p >Mens Fashion</p>
            <br />
           <p>Women Fashion</p>
          </DrawerBody >
        </DrawerContent>
      </Drawer>
    </>
  

<Link to="/men"className={style.link1}>Men </Link>
<Link to="/women"className={style.link2}>Women</Link>
<Link to="/kids"className={style.link3}>Kids</Link>
<Link className={style.link4}>Seller</Link>
<Link className={style.link5}>Best Sellers</Link>
<Link className={style.link6}>Electronics</Link>
<Link className={style.link7}>Prime</Link>
<Link className={style.link8}>Customer Services</Link>

<Image/>
      </Box>
    </div>
  )
}

export default Navabr
