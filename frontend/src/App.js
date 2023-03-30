import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
//import {AdminPage} from "./Pages/AdminPage/AdminPage";
import Footer from "./Components/KamranComponent/Footer"
import Homepage from "./Components/KamranComponent/Homepage"
import Navabr from './Components/KamranComponent/Navabr';

function App() {
  return (
    <div className="App">
     <Navabr/>
     <Homepage/>
     <Footer/>
    </div>
  );
}

export default App;
