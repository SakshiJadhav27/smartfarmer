import React from 'react';
import './App.css';
import {Navbar} from './Component/Navbar/navbar'; 
import { Router } from './Component/Router';
import { AuthContextProvider } from './Context/AuthContext';

function app(){
  return(
    <div>
   
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </div>

)

}
export default app;

