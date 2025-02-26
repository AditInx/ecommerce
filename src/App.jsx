import './App.css'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path='/Products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

