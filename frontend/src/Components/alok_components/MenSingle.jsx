import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { MdLocalShipping } from "react-icons/md";
import {useSelector,useDispatch} from "react-redux";
import { getCart } from "../../redux/Cart/cart.actions";
import {useNavigate} from "react-router-dom";

const  MenSingle = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const toast = useToast();
  const cartData=useSelector((store)=>{
   return store.cart.data;
  });
  const dispatch=useDispatch();
const navigate=useNavigate();

  const FetchIdData = async () => {
    let res = await axios.get(
      `https://navy-blue-colt-slip.cyclic.app/men/single/${id}`
    );
    setProducts(res.data);
  };

  const AddToCartItem = () => {
    console.log("added")
    const NewProduct = { ...product, quantity: 1 };

    axios
      .post("https://navy-blue-colt-slip.cyclic.app/cart", NewProduct,{
        headers:{
          authorization:`Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      .then((res) =>{
        toast({
          title: "Item Added",
          description: "Item added to cart successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        console.log(res);}
      )
      .catch((err) => console.log(err));
  
  };

  useEffect(() => {
    FetchIdData();
    dispatch(getCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let exist=false;
cartData.forEach((e)=>{
  if(e._id==id){
 exist=true;
  }
});

const GotoCart=()=>{
navigate("/cart")
}

 // console.log(id)
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={product.product}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.product}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              m="10px"
            >
              ₹{product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}></Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {product.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Discount:
                  </Text>{" "}
                  {product.discount} Off
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Strike:
                  </Text>{" "}
                  {product.strike}
                </ListItem>
              </List>
            </Box>
          </Stack>

          {
            exist?<Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            backgroundColor="white"
            borderRadius={"10px"}
           color="black"
           border="2px solid black"
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
              backgroundColor:"black",
              color:"white",

            }}
            onClick={() => GotoCart()}
          >
            Go to Cart
          </Button>:
          <Button
          backgroundColor="white"
          borderRadius={"10px"}
         color="black"
         border="2px solid black"
          rounded={"none"}
          w={"full"}
          mt={8}
          size={"lg"}
          py={"7"}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
            backgroundColor:"black",
            color:"white",
          }}
          onClick={() => AddToCartItem()}
        >
          Add to cart
        </Button>
          }

    

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default MenSingle;