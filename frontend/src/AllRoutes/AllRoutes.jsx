import React from 'react'
import Mens from '../Components/alok_components/Mens'
import {Routes,Route} from "react-router-dom"
import Homepage from '../Components/KamranComponent/Homepage'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path='/'  element={<Homepage  />}  />
       <Route path='/men'  element={<Mens  />}  />
       <Route path='/women' />
       <Route path='/kids'    />
       <Route path='/login'   />
       <Route path='/cart'    />
      </Routes>
    </div>
  )
}

export default AllRoutes