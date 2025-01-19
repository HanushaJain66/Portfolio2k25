import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import {useState} from 'react'
// import AboutUs from './Components/AboutUs';


function App() {
 return<BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
 </Routes>
 </BrowserRouter>

 
    
}

export default App;
