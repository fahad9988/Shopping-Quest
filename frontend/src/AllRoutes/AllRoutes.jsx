import React from 'react'
import Mens from '../Components/alok_components/Mens'
import {Routes,Route} from "react-router-dom"

import Homepage from '../Components/KamranComponent/Homepage'
import NewAccount from '../Pages/AccountPage/SignUp'
import { Login } from '../Pages/AccountPage/Login'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path='/'  element={<Homepage  />}  />
       <Route path='/men'  element={<Mens  />}  />
       <Route path='/women' />
       <Route path='/kids'    />
       <Route path='/cart'    />
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<NewAccount/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes