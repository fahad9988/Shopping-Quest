import React from 'react'
import Mens from '../Components/alok_components/Mens'
import {Routes,Route} from "react-router-dom"
import NewAccount from '../Pages/AccountPage/SignUp'
import { Login } from '../Pages/AccountPage/Login'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path='/mens'  element={<Mens  />}  />
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<NewAccount/>}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes