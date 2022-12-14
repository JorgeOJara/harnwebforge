import React, { setState ,useState,useEffect } from 'react';
import axios from 'axios';


export const SidePanels = (props)=>{

const [completed,setList] = useState([ { Name : "Loading..."} ]);
  
const checkForCharacterts = ()=>
{
let u = localStorage.getItem("username");
let pen = { peticion : u }

axios.post('https://harnforge.com/getCharacters', pen)
.then(function(response) {
   setList(response.data)
})
}

const go = (id)=>
{
  props.show(id)
  console.log(id);
}

useEffect(() => {
   const interval = setInterval(() => {
      checkForCharacterts();
   }, 1000);
   return () => clearInterval(interval);
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
<button className="btn btn-floating btn-sm btn-success" onClick={()=> props.changeSidePanel("false")}>
<i className="fas fa-plus" />
</button>
</div>
</div>
</div>
</div>
<center>
<div className="overflow-auto h-100 p-3 pre-scrollable">
{
completed.map(item => {
    return <button className="btn btn-secondary ch"
             onClick={ () => go( item.Name ) }
            >
          <i className="none">{item.Name}</i>
      </button>
   })
}
<div id="spacer" className="p-4" />
</div></center>
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