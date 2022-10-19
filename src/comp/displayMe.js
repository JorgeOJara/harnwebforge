import React, { setState, useState, useEffect } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";

import axios from 'axios';


/// just to display Characters info

export const DisplayMe = (props) => {

const [ufehieugciu,ddoijhdbeiu] = useState();
let pen = { name : props.content , member : localStorage.getItem("username")}

const findC = ()=>{
    axios.post('https://harnforge.com/idsFinder', pen)
.then(function(response) {
    ddoijhdbeiu(response.data);
      console.log(response.data);
  })
}
let check ;
useEffect(() => {
    const timer = setInterval(() => {
        if(props.content != check)
        {
            findC();
            check = props.content;
        }
      }, 1000);
    }, []);
 
  return (
    <>
     <div>
       {/* { ufehieugciu.map( d => {
              return <h2>{d.Name}</h2> 
           })
       } */}
     </div>
    </>
  );
};
