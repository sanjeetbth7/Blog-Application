import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import { About, 
  Dashboard, 
  Home, 
  Projects, 
  SignIn, 
  SignUp,
  CreatePost, 
  UpdatePost,
  PostPage,
  Search
 } from './pages';
import { Header,Footer,PrivateRoute, ScrollToTop } from './Components';
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute';

const App = ()=> {
  return(
    <BrowserRouter>
    <Header/>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App