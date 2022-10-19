import React, { setState, useState, useEffect } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";

import axios from 'axios';


/// just to display Characters info

export const DisplayMe = (props) => {
 
  return (
    <>
     
        <h1>{props.content}</h1>
      
    </>
  );
};
