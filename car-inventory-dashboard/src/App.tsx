import CarList from "./components/CarList"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import SingleCarPage from "./pages/SingleCarPage";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Loginpage from "./pages/LoginPage";
import Logout from "./components/Logout";
import Register from "./pages/Register";


function App() {


  return (
    <>
    
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/list" element={<CarList />}/>
        <Route path="/login" element={<Loginpage />}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/:carID" element={<SingleCarPage />}/>
      </Routes>
    </BrowserRouter>
    
    </>
    
    
    
  )
}

export default App
