import React from "react";
import {  
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PersonalData from './pages/PersonalData'
import Motivation from './pages/Motivation'
import Career from './pages/Career'
import Experience from './pages/Experience'
import References from './pages/References'
import MyFuture from './pages/MyFuture'
import ContactAndSocialMedia from './pages/ContactAndSocialMedia'
import Page404 from './pages/Page404';
import './App.scss';
   

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Motivation" element={<Motivation />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/References" element={<References />} />
          <Route path="/MyFuture" element={<MyFuture />} />
          <Route path="/ContactAndSocialMedia" element={<ContactAndSocialMedia />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>

    </>

  )
};

export default App;
