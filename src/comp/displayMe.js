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

      <div className="row form-group disc">
        <div className="col">
          <label className="">Race</label>
          <h4>{ ufehieugciu.Race }</h4>
        </div>
        <div className="col">
          <label className="">Sex</label>
            <h4>{ ufehieugciu.Sex }</h4>
         </div>
      </div>
      <div className="row form-group disc">
        <div className="col">
          <label className="">Sunsigns</label>
          <h4>{ ufehieugciu.Sunsigns }</h4>
        </div>
        <div className="col">
          <label className="">birthPlace</label>
            <h4>{ ufehieugciu.birthPlace }</h4>
         </div>
      </div>
      <div className="row form-group disc">
        <div className="col">
          <label className="">Culture</label>
          <h4>{ ufehieugciu.Culture }</h4>
        </div>
        <div className="col">
          <label className="">SocialClass</label>
            <h4>{ ufehieugciu.SocialClass }</h4>
         </div>
      </div>

      <div className="row form-group disc">
        <div className="col">
          <label className="">Description</label>
          <h4>{ ufehieugciu.Description }</h4>
        </div>
      </div>

      <div className="row form-group disc">
        <div className="col">
          <label className="">height</label>
          <h4>{ ufehieugciu.height }</h4>
        </div>
        <div className="col">
          <label className="">weight</label>
            <h4>{ ufehieugciu.weight }</h4>
         </div>
      </div>
      <div className="row form-group disc">
        <div className="col">
          <label className="">frame</label>
          <h4>{ ufehieugciu.frame }</h4>
        </div>
        <div className="col">
          <label className="">comeliness</label>
            <h4>{ ufehieugciu.comeliness }</h4>
         </div>
      </div>
      <div className="row form-group disc">
        <div className="col">
          <label className="">complexion</label>
          <h4>{ ufehieugciu.complexion }</h4>
        </div>
        <div className="col">
          <label className="">eyeColor</label>
            <h4>{ ufehieugciu.eyeColor }</h4>
         </div>
      </div>
      <div className="row form-group disc">
        <div className="col">
          <label className="">strength</label>
          <h4>{ ufehieugciu.strength }</h4>
        </div>
        <div className="col">
          <label className="">stamina</label>
            <h4>{ ufehieugciu.stamina }</h4>
         </div>
      </div>

      <div className="row form-group disc">
        <div className="col">
          <label className="">dexterity</label>
          <h4>{ ufehieugciu.dexterity }</h4>
        </div>
        <div className="col">
          <label className="">agility</label>
            <h4>{ ufehieugciu.agility }</h4>
         </div>
      </div>

      <div className="row form-group disc">
        <div className="col">
          <label className="">eyesight</label>
          <h4>{ ufehieugciu.eyesight }</h4>
        </div>
        <div className="col">
          <label className="">hearing</label>
            <h4>{ ufehieugciu.hearing }</h4>
         </div>
      </div>

      <div className="row form-group disc">
        <div className="col">
          <label className="">smell</label>
          <h4>{ ufehieugciu.smell }</h4>
        </div>
        <div className="col">
          <label className="">voice</label>
            <h4>{ ufehieugciu.hearing }</h4>
         </div>
      </div>
      <div className="row form-group disc">
        <div className="col">
          <label className="">intelligence</label>
          <h4>{ ufehieugciu.intelligence[0] } : { ufehieugciu.intelligence[1]}</h4>
        </div>
      </div>

      <div className="row form-group disc">
        <div className="col">
          <label className="">aura</label>
           <h4>{ ufehieugciu.aura }</h4>
        </div>
        <div className="col">
          <label className="">will</label>
          <h4>{ ufehieugciu.will }</h4>
        </div>
      </div>

      <div className="row form-group disc">
        <div className="col">
          <label className="">morality</label>
           <h4>{ ufehieugciu.morality }</h4>
        </div>
        <div className="col">
          <label className="">deity</label>
          <h4>{ ufehieugciu.deity }</h4>
        </div>
        <div className="col">
          <label className="">piety</label>
          <h4>{ ufehieugciu.piety }</h4>
        </div>
      </div>
    </>
  );
};
