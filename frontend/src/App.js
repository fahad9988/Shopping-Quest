import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
//import {AdminPage} from "./Pages/AdminPage/AdminPage";
import Footer from "./Components/KamranComponent/Footer"
import Homepage from "./Components/KamranComponent/Homepage"
import Navabr from './Components/KamranComponent/Navabr';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="App">

   
     <Navabr/>     
     <AllRoutes />
     <Footer/>

    </div>
  );
}

export default App;
