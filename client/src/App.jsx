import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import { About, Dashboard, Home, Projects, SignIn, SignUp } from './pages';
import { Header } from './Components';

const App = ()=> {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App