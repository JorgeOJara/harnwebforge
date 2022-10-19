import React, { setState, useState, useEffect } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";

import axios from 'axios';


/// just to display Characters info

export const DisplayMe = (props) => {

const [ufehieugciu,ddoijhdbeiu] = useState([ { Nothing:"nothing" } ]);

let pen = { name : props.content , member : localStorage.getItem("username")}

const findC = ()=>{
    axios.post('https://harnforge.com/idsFinder', pen)
.then(function(response) {
      ddoijhdbeiu(response.data);
      console.log(response.data);
  })
}

if( props.content != ufehieugciu.Name )
{
    findC();
}

  return (
    <>
       <div className="row form-group">
        <div className="col">
          <label className="">Characters Name</label>{" "}
            <h4>{ ufehieugciu.Name }</h4>
        </div>
      </div>
      <div className="row form-group">
        <div className="col">
          <label className="">Characters Info</label>{" "}
            <h4>{ ufehieugciu.Name }</h4>
        </div>
        <div className="col">
          <label className="">Race</label>
          <h4>{ ufehieugciu.Rece }</h4>
        </div>
        <div className="col">
          <label className="">Sex</label>
            <h4>{ ufehieugciu.Sex }</h4>
         </div>
      </div>
    </>
  );
};
