import React, { setState ,useState,useEffect,Redirect } from 'react';
import logo from './imgs/pngegg.png';
import alita from './imgs/azula.jpg';


import { ProfileCopntent } from './profilecontent';
import { ProfileCopntentBottom } from './profilecontentBottom';
import { CHARACTERFORMCREATOR } from './CHARACTERFORMCREATOR';


import { SidePanels } from './sidePannel';


export const Main = ()=>{

// here we safe all the content in objects and then push it into the array
 // the array its going to the server, to be saved.....
 // using axios we send the mainContainer to a mongodb micro service..  
useEffect(()=>{
  const queryParams = new URLSearchParams(window.location.search)
  const term = queryParams.get("code")
  console.log(term);
});

  // hooks
  const [sidePanel,setSidePanel] = useState(true);
 
  const [Avatare,setAvatare] = useState(alita);

//  change side pannel to none display..
    let sideContainer;
    sidePanel === true?sideContainer = <SidePanels changeSidePanel={content=>setSidePanel(content)} />:<div></div>;

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
        {/* <link href="ico/url" rel="icon" type="image/png">  */}
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
              style={{}}
            >
              {/* <i class="fas fa-bars fa-lg"></i> */}
            </button>
            {/* you can add submenu ref: 1010 */}
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
                  alt=""
                  src={alita}
                  className="rounded-circle avatar-user"
                />
                <span className="d-none d-md-inline">ASTRA CLI</span>
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
                        ASTRA-CLI#2049
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
                        {/* <i class="fas fa-user-cog" slot="leftIcon"></i> */}
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


{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* < SidePanel changeSidePanel={content=>setSidePanel(content)} />          */}
        {sideContainer}
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

{/* end of side panel */}
                {/* form */}
                <div id="details" className="col-12 col-md-7">
                  <div className="h-100 mb-4 p-2 card" style={{}}>
                    <div className="overflow-auto h-100 m-2 pr-3 d-flex flex-nowrap flex-column">
                      <div className="h-75 row">
                        <div className="col text-center">
              <div className="w-50 mx-auto my-3">
  
                            {/* block */}
                            {/* <img src="./Tupperbox Dashboard_files/tupperbox_0_silhouette.png" alt="tupperbox silhouette" class="img-fluid"> */}
<div className="justify-content-center row">
    <div className="col-auto mb-3">

                 <div className="avatar-wrapper">


                                  {/* avatar creating profile image */}
                    
                                          <ProfileCopntent avatar={Avatare} />

                                  {/* avatar content ended */}

                  </div>
     </div>
     <div className="col-12 col-md">
                   {/* Second session of profile content */}
                            <ProfileCopntentBottom />
                   {/* second section of profile content ended */}
        </div>
</div>
                   {/* Character creation... */}

           {/* 
           here we display the content in pieces to 
           to be able to work in each object creation individualy..
           that means before the data gets back here into the parrent container the variables should be
           already setup with the content to be send and saved...
           */}
                    <CHARACTERFORMCREATOR  changeAvatar={content=>setAvatare(content)}/>
         
                    {/*end of the character creation functions. */}   
      
                </div>
                    {/* <div>No tuppers selected!</div> */}
          </div></div></div></div></div></div></div>
      </main>
    </div>
   </>
  )
}