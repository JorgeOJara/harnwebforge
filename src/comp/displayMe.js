import React, { setState, useState, useEffect } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";

import axios from 'axios';


/// just to display Characters info

export const DisplayMe = (props) => {
 
  return (
    <>
       {
       props.content.map( d=> {
        <div>
        <h1>{d.Name}</h1>
        <h1>{ d.ocupation }</h1>
        <h1>{d.Avatare}</h1>
        <h1>{d.Race}</h1>
        <h1>{d.Sex}</h1>
        <h1>{d.Sunsigns}</h1>
        <h1>{d.birthPlace}</h1>
        <h1>{d.Culture}</h1>
        <h1>{d.SocialClass}</h1>
        <h1>{d.Description}</h1>
        <h1>{d.height}</h1>
        <h1>{d.weight}</h1>
        <h1>{d.frame}</h1>
        <h1>{d.comeliness}</h1>
        <h1>{d.complexion}</h1>
        <h1>{d.eyeColor}</h1>
        <h1>{d.hairColor}</h1>
        <h1>{d.complexion}</h1>
        <h1>{d.strength}</h1>
        <h1>{d.stamina}</h1>
        <h1>{d.dexterity}</h1>
        <h1>{d.agility}</h1>
        <h1>{d.eyesight}</h1>
        <h1>{d.hearing}</h1>
        <h1>{d.smell}</h1>
        <h1>{d.voice}</h1>
        <h1>{d.intelligence}</h1>
        <h1>{d.aura}</h1>
        <h1>{d.will}</h1>
        <h1>{d.morality}</h1>
        <h1>{d.deity}</h1>
        <h1>{d.piety}</h1>
        </div>
         })
       }
    </>
  );
};
