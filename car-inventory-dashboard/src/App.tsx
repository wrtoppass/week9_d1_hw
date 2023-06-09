import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Logout from './components/Logout';
import Panel from './pages/Panel'
import InfoPage from './pages/InfoPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
 
function App() {

  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Panel />}/>
          <Route path='/character/:id' element={ <InfoPage />}/>
          <Route path='/login' element={ <LoginPage />}/>
          <Route path="/logout" element={<Logout />} />
          <Route path='/register' element={ <Register />}/>
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
