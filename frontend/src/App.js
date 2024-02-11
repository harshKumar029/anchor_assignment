import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Otp from './pages/Otp';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
