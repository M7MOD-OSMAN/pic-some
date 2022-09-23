import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Photos />}></Route>

          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
