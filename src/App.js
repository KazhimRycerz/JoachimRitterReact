import React from "react";
import {  
  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import PersonalData from './components/PersonalData'
import Motivation from './components/Motivation'
import Career from './components/Career'
import Experience from './components/Experience'
import References from './components/References'
import MyFuture from './components/MyFuture'
import ContactAndSocialMedia from './components/ContactAndSocialMedia'
import Page404 from './components/Page404';
import './App.scss';
   

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Motivation" element={<Motivation />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/References" element={<References />} />
          <Route path="/MyFuture" element={<MyFuture />} />
          <Route path="/ContactAndSocialMedia" element={<ContactAndSocialMedia />} />
        </Routes>
      </Router>

    </>

  )
};

export default App;
