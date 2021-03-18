import React from "react";
import './stilo.css';

export default function Header(){
   return (
    <>
    <nav id="menu-h">
        <ul>
             <li><a href= "/">Home</a></li>

            <li><a href= "/cadastro">Cadastro</a></li>
            
            <li><a href="/Login">Login</a></li>
       
        </ul>
    </nav>
    
    </>
  );
}