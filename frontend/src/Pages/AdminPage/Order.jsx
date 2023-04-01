import {
  Box,
  Divider,
  Heading,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./SidebarSection/Sidebar";

const ProductOrder = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/orders`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleStatus = (val, id, pname, img, cname, cid, quan, price) => {
    axios
      .put(`http://localhost:8080/orders/${id}`, {
        status: val,
        id: id,
        pname: pname,
        image: img,
        cname: cname,
        cid: cid,
        quantity: quan,
        offerprice: price,
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <div style={{ display: "flex", background: "#16213E", color: "#FFF" }}>
      <Sidebar style={{ position: "fixed", top: "0" }} />
      <>
        <Box>
          <Box
            position="relative"
            top="2rem"
            left="8rem"
            borderRadius="md"
            shadow="md"
            bg={useColorModeValue("white.300", "white.700")}
            color={useColorModeValue("gray.300", "gray.700")}
            border="1px solid #999"
            width="100%"
            marginTop="5rem"
            
          >
            <Heading p="6" bgColor="#FFFF" color="black">
              Order Database
            </Heading>
            <Divider />
            <Box
              flexDirection={"column"}
              display={"flex"}
              gap={"10"}
              color={"black"}
              w={"100%"}
              bgColor="#FFFF"
            >
              <Table>
                <Thead>
                  <Tr>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Prod.Name
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Prod.ID
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Prod.Image
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Cus.Name
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Cus.ID
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Quan.
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Price
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Status
                    </Th>
                    <Th style={{ color: "black" }} w={"11%"}>
                      Stat.Maintain
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((prod) => (
                    <Tr key={prod.id} color={"white.600"}>
                      <Td w={"11%"}>{prod.pname}</Td>
                      <Td w={"11%"}>{prod.id}</Td>
                      <Td w={"11%"}>
                        <Box textAlign={"left"} w="16">
                          <Image src={prod.image} alt="name" />
                        </Box>
                      </Td>
                      <Td w={"11%"}>{prod.cname}</Td>
                      <Td w={"11%"}>{prod.cid}</Td>
                      <Td w={"11%"}>{prod.quantity}</Td>
                      <Td w={"11%"}>{prod.offerprice}</Td>
                      <Td w={"11%"}>{prod.status}</Td>
                      <Td style={{ color: "black" }} w={"11%"}>
                        <select
                          onChange={(e) =>
                            handleStatus(
                              e.target.value,
                              prod.id,
                              prod.pname,
                              prod.image,
                              prod.cname,
                              prod.cid,
                              prod.quantity,
                              prod.offerprice
                            )
                          }
                        >
                          <option style={{ color: "black" }} value="">
                            Toggle Status
                          </option>
                          <option style={{ color: "black" }} value="Pending">
                            Pending
                          </option>
                          <option style={{ color: "black" }} value="Done">
                            Done
                          </option>
                          <option style={{ color: "black" }} value="Delivered">
                            Delivered
                          </option>
                          <option style={{ color: "black" }} value="In Transit">
                            In Transit
                          </option>
                        </select>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
      </>
    </div>
  );
};

export default ProductOrder;
