import { Box, Checkbox, CheckboxGroup, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterandSort = () => {
    const [searchParams,setSearchParams]=useSearchParams()
 
    const [category,setCategory]=useState(searchParams.getAll("brand"))

    const handleFilter=(e)=>{
        const option=e.target.value
        let newCategory=[...category]

        if(newCategory.includes(option)){
          newCategory.splice(newCategory.indexOf(option),1)
        }else{
          newCategory.push(option)
        }

        setCategory(newCategory)
    }
    

    useEffect(()=>{
      
        let params={}
       category && (params.brand=category)
       console.log(params)
        setSearchParams(params)
    },[category,setSearchParams])

  
  return (
   <div>
    <div>
      <b><h2 style={{textAlign:"left"}}>Filter By Brand</h2></b>
      <div>
        <div style={{textAlign:"left"}} >
        <label>
          <input 
          
          type="checkbox"
          value="Roadster"
          defaultChecked={category.includes("Roadster")}
          onChange={handleFilter}
          style={{marginRight:"2px"}}
          />
          Roadster</label>
        </div>
        <div style={{textAlign:"left"}} >
        <label>
          <input 
          
          type="checkbox"
          value="Dennis Lingo"
          defaultChecked={category.includes("Dennis Lingo")}
          onChange={handleFilter}
          style={{marginRight:"2px"}}
          />
          Dennis Lingo</label>
        </div>

        <div style={{textAlign:"left"}}   >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Louis Philippe Sport"  defaultChecked={category.includes("Louis Philippe Sport")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       Louis Philippe Sport
     </label>
    </div>

     <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="HIGHLANDER" defaultChecked={category.includes("HIGHLANDER")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       HIGHLANDER
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="HRX by Hrithik Roshan" defaultChecked={category.includes("HRX by Hrithik Roshan")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       HRX by Hrithik Roshan
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="ADIDAS" defaultChecked={category.includes("ADIDAS")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       ADIDAS
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Mast & Harbour" defaultChecked={category.includes("Mast & Harbour")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       Mast & Harbour
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="HERE&NOW" defaultChecked={category.includes("HERE&NOW")} onChange={handleFilter} style={{marginRight:"2px"}} />
       HERE&NOW
     </label>
   </div>

   <div style={{textAlign:"left"}} >
     <label>
       <input type="checkbox" id="sports" name="interest" value="MANQ" defaultChecked={category.includes("MANQ")} onChange={handleFilter} style={{marginRight:"2px"}} />
       MANQ
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Jompers" defaultChecked={category.includes("Jompers")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       Jompers
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Allen Solly" defaultChecked={category.includes("Allen Solly")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       Allen Solly
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="INVICTUS" defaultChecked={category.includes("INVICTUS")} onChange={handleFilter} style={{marginRight:"2px"}} />
       INVICTUS
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Powerlook"  defaultChecked={category.includes("Powerlook")} onChange={handleFilter} style={{marginRight:"2px"}} />
       Powerlook
     </label>
   </div>


   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="Van Heusen" defaultChecked={category.includes("Van Heusen")} onChange={handleFilter} style={{marginRight:"2px"}} />
       Van Heusen
     </label>
   </div>

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="WROGN" defaultChecked={category.includes("WROGN")} onChange={handleFilter} style={{marginRight:"2px"}}/>
       WROGN
     </label>
   </div>
   

   <div style={{textAlign:"left"}}  >
     <label>
       <input type="checkbox" id="sports" name="interest" value="LOCOMOTIVE
"  defaultChecked={category.includes("LOCOMOTIVE")} onChange={handleFilter} style={{marginRight:"2px"}} />
       LOCOMOTIVE

     </label>
   </div>
      </div>
      </div>
   </div>
  )
}

export default FilterandSort