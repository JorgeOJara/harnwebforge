import React, { setState, useState, useEffect } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";

import axios from 'axios';


/// just to display Characters info

export const DisplayMe = (props) => {

const [ufehieugciu,ddoijhdbeiu] = useState();
let pen = { con : props.content }

axios.post('https://harnforge.com/idsFinder', pen)
.then(function(response) {
    ddoijhdbeiu(response.data);
   console.log(response.data);
})
 
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
