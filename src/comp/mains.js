import React, { setState ,useState,useEffect,Redirect } from 'react';
import logo from './imgs/pngegg.png';
import alita from "./imgs/azula.jpg";

import { CHARACTERFORMCREATOR } from './CHARACTERFORMCREATOR';

import axios from 'axios';

import { SidePanels } from './sidePannel';

import { DisplayMe } from "./displayMe";


export const Main = ()=>{

// here we safe all the content in objects and then push it into the array
 // the array its going to the server, to be saved.....
 // using axios we send the mainContainer to a mongodb micro service..  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const [User,setUser]= useState("");
const [userAvatare,setUserAvatare] = useState("");
const [UserId,setUserId] = useState(0);

//pass the name to be safe in creation objec
const [Namer,setName] = useState("");


const getUserInfo = async (accessToken) => {
  // console.log(accessToken);
  // console.log(`User ${accessToken.data.token_type} ${accessToken.data.access_token}`);
  try {
      const response = await axios.get('https://discord.com/api/users/@me', {
          headers: {
              authorization: `${accessToken.data.token_type} ${accessToken.data.access_token}`
          }
      });
      // console.log(response.data);
      return response.data;
  } catch (error) {
      //console.log(error);
    }
  }
const getToken = async (code) => {
  // App.js
  try {
      const options = new URLSearchParams({
          client_id:process.env.REACT_APP_CLIENT_ID,
          client_secret:process.env.REACT_APP_CLIENT_SECRET,
          code,
          grant_type: 'authorization_code',
          redirect_uri:"http://harnforge.com/",
          scope: 'identify',
      });
      const result = await axios.post('https://discord.com/api/oauth2/token', options);
         return result;
  } catch (error) {
  // console.log(error)
  }
}

const getInfo = async (code) => {
  const accessToken = await getToken(code);
  const userInfo = await getUserInfo(accessToken);
  // console.table(userInfo);
  // safe information of user to later use...
  localStorage.setItem("id",userInfo.id);
  localStorage.setItem("username", userInfo.username + "#" + userInfo.discriminator);
  localStorage.setItem("userAvatare",userInfo.avatar);

  // clear the api token from the url...
  window.location.replace("/")
}

useEffect(() => {
  //  localStorage.setItem("lastname", "Smith");
   
  const idStore = localStorage.getItem("id");
   const usernameStore = localStorage.getItem("username");
   const userAvatareStore = localStorage.getItem("userAvatare")

   if(!usernameStore || usernameStore == "")
   {
     const urlSearchParams = new URLSearchParams(window.location.search);
     const params = Object.fromEntries(urlSearchParams.entries());
     // console.log(params);
     if (!params.code) window.location.replace("/login");
       getInfo(params.code);
   }else{
    setUser(usernameStore);
    setUserAvatare(userAvatareStore);
    setUserId(idStore)
  }
});

const imagerFinder ="https://cdn.discordapp.com/avatars/"+ UserId+ "/" + userAvatare + ".png";

  // hooks
  const [sidePanel,setSidePanel] = useState(true);


  const [ch,setCh] = useState([])
  const [swither,setSwisher] = useState(false)


//  change side pannel to none display..
    let sideContainer;
    if(sidePanel === true){
      sideContainer = <SidePanels 
      changeSidePanel={content=>{setSidePanel(content);setSwisher(false)}} 
      show={ (content) => { setCh( content); setSwisher(true) }} 

     />
    
    };

     return(
    <>
         {/* saved from url=(0036) */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
          name="viewport"
        />{" "}
        <meta content="#333333" name="theme-color" /> {/*<base href="/">*/}

        {/* CSS only */}

        <title>HARN-BOT Dash</title>
        <style
          id="svelte-1sw1rxt-style"
          dangerouslySetInnerHTML={{
            __html:
              "\n        #dirty-screen.svelte-1sw1rxt{position:absolute;left:0;top:0;bottom:0;right:0;background-color:transparent}\n        .b{\n            background-color: black;\n          }\n          .o{\n            padding-left: 15px;\n            padding-right: 15px;\n          }\n"
          }}
        />
        <div id="app">
          <nav className="topnav navbar-expand navbar navbar-expand-md bg-primary">
            <a href="" className="navbar-brand">
              <img alt="Harn Forge" src={logo} />
              <span className="d-none d-md-inline">Hârn Forge</span>
            </a>
            <button
              id="sidebarToggle"
              className="btn-link order-0 order-lg-0 pl-0 pr-3 btn btn-none btn-sm"
              value=""
            ></button>
            <div className="dropdown-menu">
              <a
                href=""
                className="dropdown-item"
                click=""
              >
                <i className="fas fa-newspaper" />
                <span>Blog</span>
              </a>
              <a
                href=""
                className="dropdown-item"
                click=""
              >
                <i className="fab fa-discord" />
                <span>Community</span>
              </a>
              <a
                href=""
                className="dropdown-item"
                click=""
              >
                <i className="fab fa-discord" />
                <span>Support</span>
              </a>
            </div>
            <ul className="ml-auto navbar-nav">
              <li className="dropdown nav-item" disabled="false">
                <img
                  alt="discord avatar"
                  src={ UserId!=0?imagerFinder: alita }
                  className="rounded-circle avatar-user"
                />
                <span className="d-none d-md-inline">{User}</span>
              </li>
            </ul>
          </nav>
          <div id="app-nav">
            <ul id="sidenavAccordion" className="sidenav accordion bg-secondary nav">
              <div className="sidenav-menu">
                <ul className="nav">
                  <div className="sidenav-menu-heading">Manage</div>
                  <a
                    className="nav-link active one"
                    href="#"
                  >
                    <div className="nav-link-icon">
                      <i className="" slot="leftIcon" />
                    </div>
                       {User}
                  </a>
                  <div
                    className="not-allowed"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="This page is coming soon!"
                  >
                    <a className="nav-link disabled" href="">
                      <div className="nav-link-icon">
                        {/* additional */}
                      </div>
                    </a>
                  </div>
                  <div
                    className="not-allowed"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="This page is coming soon!"
                  >
                    <a className="nav-link disabled" href="">
                      <div className="nav-link-icon">
                        {/* <i class="fas fa-server" slot="leftIcon"></i> */}
                      </div>
                    </a>
                  </div>
                </ul>
              </div>
              {/* additional eneded */}
              <div className="sidenav-footer">
                <div className="small" />
              </div>
            </ul>
          </div>
          
          <main id="app-content" className="with-sidenav">
            <div className="container-fluid h-100 d-flex flex-column py-4">
              <div className="h-100 overflow-hidden flex-nowrap row">

                {/* start of side panel */}
                     { sideContainer}
                {/* end of side panel */}

                {/* form */}
                <div id="details" className="col-12 col-md-7">
                  <div className="h-100 mb-4 p-2 card" style={{}}>
                    <div className="overflow-auto h-100 m-2 pr-3 d-flex flex-nowrap flex-column">
                      <div className="h-75 row">
                        <div className="col text-center">
                            <div className="w-50 mx-auto my-3">
  
                            {/* block */}

                         {/* end block */}
                   {/* Character creation... */}

                     { swither == false? <CHARACTERFORMCREATOR />: <DisplayMe content={ch} /> }  
         
                   {/*end of the character creation functions. */}   
                </div>
                    {/* <div>No tuppers selected!</div> */}
          </div></div></div></div></div></div></div>
      </main>
    </div>
   </>
  )
}
