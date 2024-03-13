import React, { useEffect, useState } from 'react'
import Home from './copmonent/Home'
import Cart from './copmonent/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={ <Cart />}/>

        </Routes>
      </Router>

    </>
  )
}

export default App