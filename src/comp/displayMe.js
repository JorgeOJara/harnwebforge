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
          <h5>{ufehieugciu.Sex}</h5>
          <h5>{ufehieugciu.Race}</h5>
          <h5>{ufehieugciu.Sunsigns}</h5>
          <h5>{ufehieugciu.birthPlace}</h5>
          <h5>{ufehieugciu.Culture}</h5>
          <h5>{ufehieugciu.SocialClass}</h5>
          <h5>{ufehieugciu.height}</h5>
          <h5>{ufehieugciu.weight}</h5>
          <h5>{ufehieugciu.frame}</h5>
          <h5>{ufehieugciu.comeliness}</h5>
          <h5>{ufehieugciu.eyeColor}</h5>
          <h5>{ufehieugciu.hairColor}</h5>
          <h5>{ufehieugciu.strength}</h5>
          <h5>{ufehieugciu.stamina}</h5>
          <h5>{ufehieugciu.dexterity}</h5>
          <h5>{ufehieugciu.agility}</h5>
          <h5>{ufehieugciu.eyesight}</h5>
          <h5>{ufehieugciu.hearing}</h5>
          <h5>{ufehieugciu.smell}</h5>
          <h5>{ufehieugciu.aura}</h5>
          <h5>{ufehieugciu.will}</h5>
          <h5>{ufehieugciu.morality}</h5>
          <h5>{ufehieugciu.deity}</h5>
          <h5>{ufehieugciu.piety}</h5>

     </div>
    </>
  );
};
