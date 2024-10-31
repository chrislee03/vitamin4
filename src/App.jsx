
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home/home.jsx';
import NotHome from './pages/notHome/notHome.jsx';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/notHome' element={<NotHome/>} />
      </Routes>
    </>
  )
}

export default App
