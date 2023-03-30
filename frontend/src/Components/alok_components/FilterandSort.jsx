import { Box, Checkbox, CheckboxGroup, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterandSort = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const initialFilterValues=searchParams.getAll('filter')
    const [filterValue,setFilterValue]=useState(initialFilterValues||[])

    const handleFilterChange=(value)=>{
        setFilterValue(value)
    }
    

    useEffect(()=>{
      
        let params={filter:[]}

        if (filterValue.length) params.filter=filterValue
        setSearchParams(params)
        console.log(params.filter)
    },[filterValue,setSearchParams])

  
  return (
    <Box>
        <Heading>Filter</Heading>
 <CheckboxGroup  display="block" colorScheme='green' value={filterValue} onChange={handleFilterChange} >
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
    <Checkbox value='Dennis Lingo'>Dennis Lingo</Checkbox>
    <Checkbox value='Louis Philippe Sport'>Louis Philippe Sport</Checkbox>
    <Checkbox value='HIGHLANDER'>HIGHLANDER</Checkbox>
  </Stack>
</CheckboxGroup>
    </Box>
  )
}

export default FilterandSort