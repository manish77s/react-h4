import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routercompo';
import Linkcomp from './LinkCompo';


function App() {
  return (
 <div className='back'>
   <BrowserRouter>
   <Linkcomp/>
   <Router/>
   </BrowserRouter>
 </div>
  );
}

export default App;
