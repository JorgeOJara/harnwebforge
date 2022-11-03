import React, { useState, useEffect} from "react";


import axios from 'axios';


/// just to display Characters info

export const DisplayMe = (props) => {

const [ufehieugciu,ddoijhdbeiu] = useState([]);

let pen = { name : props.content , member : localStorage.getItem("username")}

const findC = ()=>{
axios.post('https://harnforge.com/idsFinder', pen)
.then(function(response) {
   ddoijhdbeiu(response.data);
    
 })
}

if( props.content != ufehieugciu.Name ){ findC(); }

useEffect(() => {
  setInterval(() => {
       console.log(ufehieugciu);
  }, 1000);
}, []);

return (
<>
<div className="justify-content-center row">
<div className="col-auto mb-3">
<div className="avatar-wrapper">
<img
    draggable="false"
    src= {ufehieugciu.Avatare}
    alt="Avatar"
    className="avatar rounded-circle"
  />
  <div
    className="not-allowed"
    data-toggle="tooltip"
    data-placement="right"
    title="Upgrade to premium to upload avatars!"
  >
    <div className="upload-button disabled">
      <i
        className="fas fa-upload"
        aria-hidden="true"
      />
    </div>
  </div></div></div>
  <div className="col-12 col-md">
    <div className="form-group">
        <h4 className="n">{ufehieugciu.Name}</h4>
    </div>
</div>
</div>
{/* CLASS */}
<div class="card text-center">
<div class="card-header">
Character Basic info
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
RACE
<span class="badge badge-primary badge-pill">{ufehieugciu.Race}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
Sex
<span class="badge badge-primary badge-pill">{ufehieugciu.Sex}</span>
</li>
</ul>
</div>
{/* <div class="card-footer text-muted">

</div> */}
</div>
<div class="card text-center">
<div class="card-header">
Character backgroundS
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
Sunsigns
<span class="badge badge-primary badge-pill">{ufehieugciu.Sunsigns}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
birthPlace
<span class="badge badge-primary badge-pill">{ufehieugciu.birthPlace}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
Culture
<span class="badge badge-primary badge-pill">{ufehieugciu.Culture}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
SocialClass
<span class="badge badge-primary badge-pill">{ufehieugciu.SocialClass}</span>
</li>
</ul>
</div>
{/* <div class="card-footer text-muted">

</div> */}
</div>

<div class="card text-center">
<div class="card-header">
Character'S appearance
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
height
  <span class="badge badge-primary badge-pill">{ufehieugciu.height}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
weight
<span class="badge badge-primary badge-pill">{ufehieugciu.weight}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
frame
<span class="badge badge-primary badge-pill">{ufehieugciu.frame}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
comeliness
<span class="badge badge-primary badge-pill">{ufehieugciu.comeliness}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
complexion
<span class="badge badge-primary badge-pill">{ufehieugciu.complexion}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
eyeColor
<span class="badge badge-primary badge-pill">{ufehieugciu.eyeColor}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
hairColor
<span class="badge badge-primary badge-pill">{ufehieugciu.hairColor}</span>
</li>
</ul>
</div>
{/* <div class="card-footer text-muted">

</div> */}
</div>


<div class="card text-center">
<div class="card-header">
Character'S stats
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
strength
<span class="badge badge-primary badge-pill">{ufehieugciu.strength}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
stamina
<span class="badge badge-primary badge-pill">{ufehieugciu.stamina}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
dexterity
<span class="badge badge-primary badge-pill">{ufehieugciu.dexterity}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
agility
<span class="badge badge-primary badge-pill">{ufehieugciu.agility}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
eyesight
<span class="badge badge-primary badge-pill">{ufehieugciu.eyesight}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
hearing
<span class="badge badge-primary badge-pill">{ufehieugciu.hearing}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
smell
<span class="badge badge-primary badge-pill">{ufehieugciu.smell}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
voice
<span class="badge badge-primary badge-pill">{ufehieugciu.voice}</span>
</li>
</ul>
</div>
{/* <div class="card-footer text-muted">

</div> */}
</div>


<div class="card text-center">
<div class="card-header">
Character'S personality
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
intelligence
<span class="badge badge-primary badge-pill">{ufehieugciu.intelligence}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
aura
<span class="badge badge-primary badge-pill">{ufehieugciu.aura}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
will
<span class="badge badge-primary badge-pill">{ufehieugciu.will}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
morality
<span class="badge badge-primary badge-pill">{ufehieugciu.morality}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
deity
<span class="badge badge-primary badge-pill">{ufehieugciu.deity}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
piety
<span class="badge badge-primary badge-pill">{ufehieugciu.piety}</span>
</li>
</ul>
</div>
<div class="card-footer text-muted">
      
</div>
</div>

{/* items */}
<div class="card text-center">
<div class="card-header">
 Character Items
</div>
<div class="card-body">
<ul class="list-group">
  { ufehieugciu.length > 0?ufehieugciu.items.map( d => <li class="list-group-item d-flex justify-content-between align-items-center">Item :<span class="badge badge-primary badge-pill">{ d }</span></li>): null }
</ul>
</div>
<div class="card-footer text-muted">
      
</div>
</div>
</>
);
};
