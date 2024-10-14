import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


function App() {


  return (
    <>    
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
      <Toaster position='top-center'/>
    </>
  )
}

export default App
