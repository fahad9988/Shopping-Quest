import React from 'react'
import Mens from '../Components/alok_components/Mens'
import {Routes,Route} from "react-router-dom"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path='/mens'  element={<Mens  />}  />
      </Routes>
    </div>
  )
}

export default AllRoutes