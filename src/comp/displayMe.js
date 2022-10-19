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
     <div>
          <h2>{ufehieugciu.Name}</h2>
          <h5>Sex : {ufehieugciu.Sex}</h5>
          <h5>Race : {ufehieugciu.Race}</h5>
          <h5>Sunsigns :{ufehieugciu.Sunsigns}</h5>
          <h5>birthPlace : {ufehieugciu.birthPlace}</h5>
          <h5>Culture : {ufehieugciu.Culture}</h5>
          <h5>SocialClass :{ufehieugciu.SocialClass}</h5>
          <h5>height : {ufehieugciu.height}</h5>
          <h5>weight : {ufehieugciu.weight}</h5>
          <h5>frame : {ufehieugciu.frame}</h5>
          <h5>comeliness : {ufehieugciu.comeliness}</h5>
          <h5>eyeColor : {ufehieugciu.eyeColor}</h5>
          <h5>hairColor : {ufehieugciu.hairColor}</h5>
          <h5>strength : {ufehieugciu.strength}</h5>
          <h5>stamina : {ufehieugciu.stamina}</h5>
          <h5>dexterity : {ufehieugciu.dexterity}</h5>
          <h5>agility : {ufehieugciu.agility}</h5>
          <h5>eyesight : {ufehieugciu.eyesight}</h5>
          <h5>hearing : {ufehieugciu.hearing}</h5>
          <h5>smell :{ufehieugciu.smell}</h5>
          <h5>aura : {ufehieugciu.aura}</h5>
          <h5>will:{ufehieugciu.will}</h5>
          <h5>morality : {ufehieugciu.morality}</h5>
          <h5>deity :{ufehieugciu.deity}</h5>
          <h5>piety : {ufehieugciu.piety}</h5>

     </div>
    </>
  );
};
