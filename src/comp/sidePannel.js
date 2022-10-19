import React, { setState ,useState,useEffect } from 'react';
import axios from 'axios';


export const SidePanels = (props)=>{

const [list,setList] = useState("No characters registered!");
  
const checkForCharacterts = ()=>
{
let u = localStorage.getItem("username");
let pen = { peticion : u }

axios.post('https://harnforge.com/getCharacters', pen)
.then(function(response) {
   setList(response.data)
})
}

useEffect(() => {
const timer = setTimeout(() => {
checkForCharacterts();
}, 1000);
}, []);

return(
<>
<div id="list" className="col-12 col-md-5 h-100">
<div className="mb-4 h-100 card" style={{}}>
<div className="bg-primary d-flex align-items-center justify-content-between card-header">
Your Characters
<div className="row align-items-center" slot="cardTitle">
{/* button large display */}
<div className="action-menu">
<div className="floating-action">
<div className="badge badge-dark"></div>
<button className="btn btn-floating btn-sm btn-success" onClick={()=>props.changeSidePanel("false")}>
<i className="fas fa-plus" />
</button>
</div>
</div>
</div>
</div>
<div className="overflow-auto h-100 p-3">
{list.map(item => {
    return <h2>{item.Name}</h2>;
   })
}
<div id="spacer" className="p-4" />
</div>
</div>
<div className="position-absolute text-right floating-action-menu mx-2 d-md-none active"
style={{ bottom: 20, right: 20 }}
>
<div className="action-menu">
{/* nothing to see here... */}
</div>
</div>
</div> 
</>
)
}