import React from 'react'
import Mens from '../Components/alok_components/Mens'
import {Routes,Route} from "react-router-dom"

import Homepage from '../Components/KamranComponent/Homepage'
import NewAccount from '../Pages/AccountPage/SignUp'
import { Login } from '../Pages/AccountPage/Login'
import MenSingle from '../Components/alok_components/MenSingle'
import Womens from '../Components/alok_components/Womens'
import WomenSingle from '../Components/alok_components/WomenSingle'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
       <Route path='/'  element={<Homepage  />}  />
       <Route path='/men'  element={<Mens  />}  />
       <Route path='/women'  element={<Womens  />}  />
       <Route path='/women' />
       <Route path='/kids'    />
       <Route path='/cart'    />
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<NewAccount/>}></Route>
       <Route path="/MenSingle/single/:id" element={<MenSingle />} />
       <Route path="/WomenSingle/single/:id" element={<WomenSingle />} />
      </Routes>
    </div>
  )
}

export default AllRoutes