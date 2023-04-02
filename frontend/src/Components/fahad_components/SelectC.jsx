import { Select } from '@chakra-ui/react';
import React from 'react';
import { updateCart } from '../../redux/Cart/cart.actions';
import { useDispatch } from 'react-redux';

const SelectC = (props) => {
  const [quant,setQuant]=React.useState(props.quantity);

  const dispatch=useDispatch()
  return (
    <div>
     <Select  value={quant} onChange={(e)=>{setQuant(e.target.value)
    dispatch(updateCart(props.id,{...props,quantity:Number(e.target.value)}))
    }} size="sm"  backgroundColor={"#F0F2F2"} border={"1px solid #D0D4D4"} borderRadius={"5px"}   focusBorderColor="#637E85" >
        <option value={1}>{"Qty: 1"}</option>
        <option value={2}>{"Qty: 2"}</option>
        <option value={3}>{"Qty: 3"}</option>
        <option value={4}>{"Qty: 4"}</option>
        <option value={5}>{"Qty: 5"}</option>
        <option value={6}>{"Qty: 6"}</option>
            </Select>
    </div>
  )
}

export default SelectC