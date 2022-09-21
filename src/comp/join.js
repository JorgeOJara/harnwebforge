import '../css/join.css';
import logo from './imgs/pngegg.png';

import React, {setState ,useState,useEffect} from 'react';


export const Join = ()=>{
    const enlace = "https://discord.com/api/oauth2/authorize?client_id=1006779722988011592&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=identify";
    function login()
{
    window.location.replace(enlace);
}
  return (
        <div className="voy">
            <div className="topleft">
            <nav className="topnav navbar-expand navbar navbar-expand-md bg-primary">
            <a href="" className="navbar-brand">
              <img alt="Harn Forge" src={logo} />
              <span className="d-none d-md-inline">  Hârn Forge</span>
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
  );
}


