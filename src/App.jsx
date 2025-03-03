import './App.css'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Card from './components/Card'
import { CartProvider } from './components/CartContext'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/products/:id' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App

