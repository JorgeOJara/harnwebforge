import React, { setState, useState, useEffect } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";

import axios from 'axios';


/// just to display Characters info

export const DisplayMe = (props) => {

const [completed,setList] = useState();
let pen = { id : props.content }

axios.post('https://harnforge.com/idsFinder', pen)
.then(function(response) {
   setList(response.data);
   console.log(response.data);
})
 
  return (
    <>
       {completed.map( d => <h2>{d.Name}</h2> )}
    </>
  );
};
