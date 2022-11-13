import '../css/join.css';
import logo from './imgs/pngegg.png';

import React, {setState ,useState,useEffect} from 'react';


export const Join = ()=>{
    const enlace = "https://discord.com/api/oauth2/authorize?client_id=1006779722988011592&redirect_uri=https%3A%2F%2Fharnforge.com%2F&response_type=code&scope=identify";
    function login()
{
    window.location.replace(enlace);
}
  return (
    <>
    <head>
<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
<meta
content="width=device-width,initial-scale=1,shrink-to-fit=no"
name="viewport"
/>
<meta content="#333333" name="theme-color" /> 
     <title>Harn Forge</title>
    </head>
        <div className="voy">
            <div className="topleft">
            <nav className="topnav navbar-expand navbar navbar-expand-md bg-primary">
            <a href="" className="navbar-brand">
              <img alt="Harn Forge" src={logo} />
              <span className="d-none d-md-inline">Hârn Forge</span>
              </a>
          </nav>
            </div>
         <div className="middle">
            <h1>Welcome to HARN</h1>
            <hr />
                <button className="btn btn-secondary b" onClick={()=>login()}>Login Using Discord</button>
            </div>
        <div className="bottomleft">
            <p>by Debiano</p>
         </div>
       </div>
       </>
  );
}


