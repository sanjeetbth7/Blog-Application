import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import { About, Dashboard, Home, Projects, SignIn, SignUp } from './pages';
import { Header,Footer,PrivateRoute } from './Components';

const App = ()=> {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App