import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    useToast,
   
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Css/hover-glow-shadow.css"
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };

function WomenCard({_id, brand,product, image,description,price,rate,count,discount}) {
  const navigate=useNavigate();
  const toast = useToast();
  const token = JSON.parse(localStorage.getItem(""));
  const AddToCartItem = async (id) => {
    let data = await axios.get(
      `https://navy-blue-colt-slip.cyclic.app/women/${_id}`
    );
    const NewProduct = { ...data.data, quantity: 1 };

    axios
      .post("https://navy-blue-colt-slip.cyclic.app/women", NewProduct,{
        headers: {
          Authorization: token.token,
        },
      })
      .then(() =>
        toast({
          title: "Item Added",
          description: "Item added to cart successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        })
      )
      .catch((err) => console.log(err));
  };

    return (
      <Link to={`/WomenSingle/single/${_id}`}>
      <Flex p={4} margin="auto" w="fit-content" alignItems="center" justifyContent="center" className="hvr-grow-shadow">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          // maxW="sm"
          width="250px"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              
            />
          )}        <Image
            src={image}
            alt={`Picture of ${product}`}
            roundedTop="lg"
            padding="5px"
            width="100%"
            // height="50%"
          />        <Box p="6">
            {/* <Box d="flex" alignItems="baseline"> */}
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" color="orange">
                  New
                </Badge>
              )}
            {/* </Box> */}
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                color="#4D4530"
                
                onClick={() => {
                  navigate(`/beautyface/FaceSinglePage/${_id}`);
                }}
                >
                {product}
              </Box>
              <Tooltip
                label="Add"
                bg="white"
                placement={'top'}
                color={'#4D4530'}  
                fontSize={'1.em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon onClick={()=>AddToCartItem(_id)} as={FiShoppingCart} h={22} w={22} alignSelf={'center'} color="orange" />
                </chakra.a>
              </Tooltip>
            </Flex>         
            <Box>
              <Box fontSize={16} color={'#4D4530'}
                 lineHeight="tight"
                 isTruncated
                 
                >
                {brand}
                </Box>
              </Box>
             <Flex justifyContent="space-between" alignContent="center" >
              {/* <Rating rating={rate} numReviews={data.numReviews} display={"flex"} /> */}

              
              <Box display="flex"  gap={5} fontSize="2xl" color={useColorModeValue('gray.800', 'white')}
              lineHeight="tight"
              isTruncated
              >
                <Box display="flex" gap={2}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  ₹ 
                </Box>
                <Box fontSize={18} fontWeight="bold" color={'#4D4530'}
                >
                {price}
                </Box>
                </Box>
                <Box fontSize={16} color={'#4D4530'}
                 lineHeight="tight"
                 isTruncated
                 
                >
                {discount}
                </Box>
                
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
     </Link>
    );
  }export default WomenCard;