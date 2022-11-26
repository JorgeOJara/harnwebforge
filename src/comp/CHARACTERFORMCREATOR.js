import React, { setState, useState, useEffect } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";

import axios from 'axios';

// w-50

import alita from './imgs/azula.jpg';
// safer... 
import { checkBeforeSafe } from "./theFiinalStand";


// the auto generator script.. to help with some things...
import { makeitForMe } from "./autocharactercreationFunctionality";


//  the weapons information object
import { weaponsAval } from "./weapons";

// the armor information object
import { ARMORval } from "./armor";

import { skillsObj } from "./skills";

// this component, its the form on the website, where the magic happens..
// IN here you can found all the form imputs also the desing and structure of the form

export const CHARACTERFORMCREATOR = (props) => {
  
  const [Avatare,setAvatare] = useState(alita);


  // all the main variables are here
  const dt = new ValueGetter();

  // Creating a instance of the auto class...
  const done =  new makeitForMe();

  // checker schema
  const final  = new checkBeforeSafe();

  // schema .. of the character
  const [Character, setCharacter] = useState(objContent);

  // to choose gods
  const gods =  ["Agrik","Halea","Ilvir","Larani","Morgath","Naveh","Peoni","Sarajin","Save kor","Siem"];
  
  // display sunsings
  const [ sun, setsun] = useState("");
  
  // setting up the data on the object.....

  const setSex = (e) => {let updatedValue = {Sex:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setRace = (e) => {let updatedValue = {Race:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}


  const setSunsigns = (e) => {
  
     let sun = e.target.value.split("-")
     let content = done.chooseMyBirthdayForMe(parseInt(sun[1]),parseInt(sun[2]));
     setsun(content)
     let updatedValue = { Sunsigns : content}

    setCharacter(Character => ({...Character,...updatedValue}));

}

 const UpdatesetSocialOptions = () =>
 {
      setSocial([]);
      if(Culture == "Tribal"){ dt.socialClass.Tribal.map(d =>  setSocial(social => [...social, d ]))}
      if(Culture == "Viking"){dt.socialClass.Viking.map(d =>  setSocial(social => [...social, d ]))}
      if(Culture == "Feudal"){dt.socialClass.Feudal.map(d =>  setSocial(social => [...social, d ]))}
      if(Culture == "Imperial"){dt.socialClass.Imperial.map(d =>  setSocial(social => [...social, d ]))}
      if(Culture == "Sindarin"){dt.socialClass.Sindarin.map(d =>  setSocial(social => [...social, d ]))}
      if(Culture == "Khuzan"){dt.socialClass.Khuzan.map(d =>  setSocial(social => [...social, d ]))}
 }
  const setbirthPlace = (e) => {
    let updatedValue = {birthPlace:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));

  if(e.target.value == "Habe"){ setCulture("Khuzan");}
  if(e.target.value == "Elshavel"){ setCulture("Sindarin");}
  if(e.target.value == "Ulfshafen"){ setCulture("Sindarin"); }
  UpdatesetSocialOptions()
}


  const setCultures  = (values) => {let updatedValue = {Culture:values};
  setCharacter(Character => ({...Character,...updatedValue}));}

  // helps with the group selection of places...
  const [plc,setplc] = useState(['None']);

  // set the culture according to the value given...
  const [Culture,setCulture] = useState("");

  const [social,setSocial] = useState(["None"]);

  // this its the list of ocupations avaliables for the social class choosen...
  const [ocupation,setOcupation] = useState(["None"]);

  const [oValue,setOvalue] =  useState(["None"]);



  const showMeMyculture = (valueChoosen) =>
  {
    switch(valueChoosen) {
      case 'Barbarian':
          setCulture("Tribal")
        break;
      case 'Melderyn':
          setCulture("Viking")
        break;
      case 'Tharda':
         setCulture("Imperial")
        break;

      default:
          setCulture("Feudal")
     }
     setCultures(Culture);
     UpdatesetSocialOptions()
  }

  const setregionalPlace = (e)=>
  {
    const val = e.target.value;

    setplc([]);
    if('Barbarian' == val){ dt.birthTable.Barbarian.map(d =>  setplc(plc => [...plc, d ])) }
    if('Chybisa' == val){ dt.birthTable.Chybisa.map(d =>  setplc(plc => [...plc, d ])) }
    if('Kaldor' == val){ dt.birthTable.Kaldor.map(d =>  setplc(plc => [...plc, d ])) }
    if('Kanday' == val){  dt.birthTable.Kanday.map(d =>  setplc(plc => [...plc, d ])) }
    if('Melderyn' == val){  dt.birthTable.Melderyn.map(d =>  setplc(plc => [...plc, d ])) }
    if('Orbaal' == val){  dt.birthTable.Orbaal.map(d =>  setplc(plc => [...plc, d ])) }
    if('Rethem' == val){ dt.birthTable.Rethem.map(d =>  setplc(plc => [...plc, d ])) }
    if('Tharda' == val){  dt.birthTable.Tharda.map(d =>  setplc(plc => [...plc, d ])) }
    if('Misc' == val){  dt.birthTable.Misc.map(d =>  setplc(plc => [...plc, d ]))} 
    showMeMyculture(val);
  }

  const [s,setS] = useState("none");

  const setSocialClass = (e) => {
    let updatedValue = {SocialClass:e.target.value};
    setCharacter(Character => ({...Character,...updatedValue}));
    setS(e.target.value);
    // call weapons options function to update equipment

    if(Culture == "Tribal")
    { 
          setOcupation([]);
          if(e.target.value == "Slave"){dt.tribalCulture.Slave.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
          if(e.target.value == "Freeman"){dt.tribalCulture.Freeman.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
          if(e.target.value == "Nobility"){dt.tribalCulture.Nobility.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
  
    }
    if(Culture == "Viking")
    {
        setOcupation([]);
        if(e.target.value == "Slave"){dt.vikingCulture.Slave.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
        if(e.target.value == "Freeman"){dt.vikingCulture.Freeman.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
        if(e.target.value == "guilded"){dt.vikingCulture.guilded.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
        if(e.target.value == "Nobility"){dt.vikingCulture.Nobility.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
  
    }
    if(Culture == "Feudal")
    {
      setOcupation([]);
      if(e.target.value == "Slave"){dt.feudalCulture.Slave.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value== "Serf"){dt.feudalCulture.Serf.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "Freeman"){dt.feudalCulture.Freeman.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "guilded"){dt.feudalCulture.guilded.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "Nobility"){dt.feudalCulture.Nobility.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
  
    }
    if(Culture == "Imperial")
    {
      setOcupation([]);
      if(e.target.value == "Slave"){dt.imperialCulture.Slave.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "Freeman"){dt.imperialCulture.Freeman.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "guilded"){dt.imperialCulture.guilded.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "Nobility"){dt.imperialCulture.Nobility.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
    }
    if(Culture == "Sindarin")
    {
      setOcupation([]);
      if(e.target.value == "Freeman"){dt.sindarinCulture.Freeman.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "guilded"){dt.sindarinCulture.guilded.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "Nobility"){dt.sindarinCulture.Nobility.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
    }
    if(Culture == "Khuzan")
    {
      setOcupation([]);
      if(e.target.value == "Freeman"){dt.khuzanCulture.Freeman.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "guilded"){dt.khuzanCulture.guilded.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
      if(e.target.value == "Nobility"){dt.khuzanCulture.Nobility.map(d =>  setOcupation(ocupation => [...ocupation, d ]))}
    }
}





const [finallSkills,setSkills] =  useState("");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const changeValueforskillsList = (val,so) =>{
     if(so == "Slave"){ 
      skillsObj.Freeman.map( d => {
              if(d[0] == val){
                let updatedValue = {skills:d[2]};
                setCharacter(Character => ({...Character,...updatedValue}));
                setSkills(d[2])
              }
          })
      }
      if(so == "Serf"){ 
        skillsObj.Freeman.map( d => {
            if(d[0] == val){
              let updatedValue = {skills:d[2]};
              setCharacter(Character => ({...Character,...updatedValue}));
              setSkills(d[2])
            }
        })
    }
    if(so == "Freeman"){ 
      skillsObj.Freeman.map( d => {
          if(d[0] == val){
            let updatedValue = {skills:d[2]};
            setCharacter(Character => ({...Character,...updatedValue}));
            setSkills(d[2])
          }
      })
  }
  if(so == "guilded"){ 
    skillsObj.Freeman.map( d => {
        if(d[0] == val){
          let updatedValue = {skills:d[2]};
          setCharacter(Character => ({...Character,...updatedValue}));
          setSkills(d[2])
        }
    })
  }
  if(so == "Nobility"){ 
    skillsObj.Freeman.map( d => {
        if(d[0] == val){
          let updatedValue = {skills:d[2]};
          setCharacter(Character => ({...Character,...updatedValue}));
          setSkills(d[2])
        }
    })
  }
}

  const setSocialOcupation = (e) => {
    let updatedValue = {ocupation:e.target.value};
    setCharacter(Character => ({...Character,...updatedValue}));
    changeValueforskillsList(e.target.value,s);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const setHeight = (e) => {let updatedValue = {Height:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setweight = (e) => {let updatedValue = {weight:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}
  
  const setcomeliness= (e) => {let updatedValue = {comeliness:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setframe= (e) => {let updatedValue = {frame:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setcomplexion= (e) => {let updatedValue = {complexion:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}
 

  const seteyeColor= (e) => {let updatedValue = {eyeColor:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}


  const sethairColor= (e) => {let updatedValue = {hairColor:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setstrength= (e) => {let updatedValue = {strength:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setstamina= (e) => {let updatedValue = {stamina:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setdexterity= (e) => {let updatedValue = {dexterity:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setagility= (e) => {let updatedValue = {agility:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const seteyesight= (e) => {let updatedValue = {eyesight:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const sethearing= (e) => {let updatedValue = {hearing:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setsmell= (e) => {let updatedValue = {smell:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setvoice= (e) => {let updatedValue = {voice:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}
  

  // medicalOption it needs to be ramdomize

  const setintelligence= (e) => {let updatedValue = {intelligence:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}
  
  const setAura= (e) => {let updatedValue = {aura:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}


    
  const setwill= (e) => {let updatedValue = {will:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setmorality= (e) => {let updatedValue = {morality:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}
  

  const setdeity= (e) => {let updatedValue = {deity:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setpiety= (e) => {let updatedValue = {piety:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}
  


/// items collected
  const [itemsc,setItemsc] = useState([]);

// collect weapons
  const itemsCollector = (e) => 
  {
      setItemsc(itemsc => [...itemsc, e.target.value]);

      let updatedValue = {items:itemsc};

      setCharacter(Character => ({...Character,...updatedValue}));
  }


  const verifier = ()=>
  {
    //prepare to safe
      final.collect(Character)
      final.checkforAll()
      final.displayer()

   ///  safe the username of the player who created this character


     axios.post('https://harnforge.com/CreateCharacter', Character)
       .then(function(response) {
           console.log(response.data);
        })
      // here its the effect you wanna safe..

      props.backonMain();
  }
 const setAndsafeAvatare = (e)=>
 {
  setAvatare(e.target.value);

  let updatedValue = {Avatare:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));

 }

 

  return (
    <>
    <div className="justify-content-center row">
    <div className="col-auto mb-3">
    <div className="avatar-wrapper">
   <img
        draggable="false"
        src={  Avatare }
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
          <input
            maxLength={80}
            type="text"
            className="bg-secondary pl-2 text-white form-control-lg form-control"
            name="name"
            placeholder="Full Name"
            onChange={(event) => {

              let ussss = localStorage.getItem("username");

              let updateValue = {discordUsername : ussss};
              setCharacter(Character => ({...Character,...updateValue}));

              let updatedValue = { Name : event.target.value }
              setCharacter(Character => ({...Character,...updatedValue}));
          }}
          />
        </div>
    </div>
</div>

      <form className="form-group f">
        <label className="">Character sheet</label>
        <div className="input-group">
          <input
            id="avUrl"
            maxLength={250}
            type="url"
            className="bg-secondary pl-2 text-white w-50 form-control"
            onChange={(event) => setAndsafeAvatare(event)}
            placeholder="AVATAR URL"
          />
        </div>
      </form>
      {/* gender */}
      <div className="form-group">
        <select
          autoComplete="off"
          className="bg-secondary pl-2 text-white form-control"
          name="group"
          onChange={e => setSex(e)}
        >
          <option value="">choose</option>
          <option value="female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
      {/* race */}

      <div className="form-group">
        <select
          autoComplete="off"
          className="bg-secondary pl-2 text-white form-control"
          name="group"
          onChange={(e) => setRace(e)}
        >
          <option value="">Choose</option>
          <option value="Human">Human</option>
          <option value="Sindarin">Sindarin</option>
          <option value="Khuzdul">Khuzdul</option>
        </select>
      </div> 
      <div className="row form-group">
        <div className="col">
          <label className="">Birthday</label>{" "}
          <input
            type="date"
            className="bg-secondary pl-2 text-white form-control"
            name="birthday"
            placeholder=""
            onChange={(e) => setSunsigns(e) }
          />
        </div>
        <div className="col">
          <label className="">Sunsigns</label>
            <h4>{ sun }</h4>
        </div>
        <div className="col">
          <label className="" />
          {/*    <input type="number" class="pl-2 text-white overflow-hidden form-control-plaintext" name="posts"  placeholder="">  */}
        </div>
      </div>

      {/* here */}
      <div class="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">Birth Region</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e => setregionalPlace(e)}
          >
            {/* wee need a table of birth places */}
            <option value="None">None</option>
            <option value="Barbarian">Barbarian</option>
            <option value="Chybisa">Chybisa</option>
            <option value="Kaldor">Kaldor</option>
            <option value="Kanday">Kanday</option>
            <option value="Melderyn">Melderyn</option>
            <option value="Orbaal">Orbaal</option>
            <option value="Rethem">Rethem</option>
            <option value="Tharda">Tharda</option>
            <option value="Misc">Misc</option>
          </select>
        </div>
        <div className="col">
          <label className="">Birth Place</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e => setbirthPlace(e)}
          >
            {/* wee need a table of birth places */}
            {plc.map( d => <option value={d} >{d}</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Culture</label>
          <h5>{ Culture }</h5>
        </div>
      </div>
      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">Social Class</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={(e) => setSocialClass(e)}
          >
               { social.map( d => <option value={d} >{d}</option> )}
          </select>
        </div>
        {/* input type */}
        <div className="col">
          <label className="">Ocupation</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={(e) => {setSocialOcupation(e);}}
          >
               {ocupation.map( d => <option value={d}>{d}</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Skills</label>
            <h4>{ finallSkills }</h4>
        </div>
      </div>
      {/* family dev  */}
      <div className="form-group">
        <label className="">Description</label>
        <textarea
          maxLength={2000}
          className="bg-secondary pl-2 text-white form-control"
          name="description"
          placeholder=""
          defaultValue="Out of __ siblings, I was __ 
            (first, second, third, etc).
            I was raised by my __ 
            (birth parents, adopted family, etc).
            Among my family, I am __ 
            (an outcast, the favorite, etc).
            The head of my clan/family is my ___
              (uncle, grandfather's brother, etc).

            
            Feel free to add further estrangement details if desired!"
        />
      </div>

      {/* looks */}
      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">Height</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setHeight(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">Weight</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setweight(e)}}
            />
          </div>
        </div>
      </div>
      {/* side content /  format */}
      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">COMELINESS</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e =>{setcomeliness(e)}}
          >
            <option value="null"></option>
            <option value="Ugly">Ugly</option>
            <option value="Plain">Plain</option>
            <option value="Average">Average</option>
            <option value="Attractive">Attractive</option>
            <option value="Handsome">Handsome</option>
          </select>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">Frame</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e =>{setframe(e)}}
          >
            <option value="null"></option>
            <option value="Scant">Scant</option>
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Heavy">Heavy</option>
            <option value="Massive">Massive</option>
            <option value="theammmmm">theammmmm</option>
          </select>
        </div>
      </div>

      {/* last part */}
      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">complexion</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e =>{setcomplexion(e)}}
          >
            <option value="null"></option>
            <option value="Brown">Brown</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Silver">Silver</option>
            <option value="Blond">Blond</option>
          </select>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">Eye Color</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e =>{seteyeColor(e)}}
          >
            <option value="null"></option>
            <option value="Brown">Brown</option>
            <option value="Hazel">Hazel</option>
            <option value="Gray">Gray</option>
            <option value="Violet">Violet</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className=""> Hair Color</label>
        <select
          autoComplete="off"
          className="bg-secondary pl-2 text-white form-control"
          name="group"
          onChange={e =>{sethairColor(e)}}
        >
          <option value="null"></option>
          <option value="Brown">Brown</option>
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Silver">Silver</option>
          <option value="Blond">Blond</option>
        </select>
      </div>

      {/* pycontent */}

      <h3></h3>

      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">STRENGTH</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setstrength(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">STAMINA</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setstamina(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">DEXTERITY</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setdexterity(e)}}
            />
          </div>
        </div>
      </div>
      {/* triple content /  format */}
      {/*  second stats */}

      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">AGILITY</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setagility(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">HEARING</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{sethearing(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">EYESIGHT</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{seteyesight(e)}}
            />
          </div>
        </div>
      </div>

      {/* last part */}
      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">SMELL</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setsmell(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">VOICE</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setvoice(e)}}
            />
          </div>
        </div>
      </div>

      {/* checkbox */}
      <div className="form-group">
        <label className="medic">Medical option</label>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
      </div>

      {/* Personality Attributes */}

      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">Intelligence</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setintelligence(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">Aura</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setAura(e)}}
            />
          </div>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">Will</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setwill(e)}}
            />
          </div>
        </div>
      </div>
      {/* triple content /  format */}
      {/*  second stats */}

      <div className="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">Morality</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setmorality(e)}}
            />
          </div>
        </div>
        <div className="col">
        <label className="">deity</label>
        <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e =>{setdeity(e)}}
          >
             <option value="None">None</option> 
               {gods.map( d => <option value={ d }>{ d }</option> )}
          </select>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">Piety</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setpiety(e)}}
            />
          </div>
        </div>
      </div>

      <h3 className="hidders">Choose your Gear and weapons</h3>

      <div className="row form-group">
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
              <option value="None">None</option> 
            {weaponsAval.map( d => <option value={d.itemName}>{d.itemName}</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
             <option value="None">None</option> 
             {weaponsAval.map( d => <option value={d.itemName}>{d.itemName}</option> )}
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
              <option value="None">None</option> 
              {weaponsAval.map( d => <option value={d.itemName}>{d.itemName}</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
              <option value="None">None</option> 
              {weaponsAval.map( d => <option value={d.itemName}>{d.itemName}</option> )}
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
              <option value="None">None</option> 
              {weaponsAval.map( d => <option value={d.itemName}>{d.itemName}</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
              <option value="None">None</option> 
              {weaponsAval.map( d => <option value={d.itemName}>{d.itemName}</option> )}
          </select>
        </div>
      </div>

      {/* gear */}
      <div className="row form-group">
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
            <option value="None">None</option> 
            { ARMORval.map( d => <option value={d}>{d.ItemName} ({d.ArmorType})</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
            <option value="None">None</option> 
             { ARMORval.map( d => <option value={d}>{d.ItemName} ({d.ArmorType})</option> )}
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label class="">Armor</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
            <option value="None">None</option> 
            { ARMORval.map( d => <option value={d}>{d.ItemName} ({d.ArmorType})</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e =>{  itemsCollector(e) }}
          >
            <option value="None">None</option> 
           { ARMORval.map( d => <option value={d}>{d.ItemName} ({d.ArmorType})</option> )}
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e => {  itemsCollector(e) }}
          >
            <option value="None">None</option> 
            { ARMORval.map( d => <option value={d}>{d.ItemName} ({d.ArmorType})</option> )}
          </select>
        </div>
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="on"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={ e => {  itemsCollector(e) }}
          >
            <option value="None">None</option> 
            { ARMORval.map( d => <option value={d}>{d.ItemName} ({d.ArmorType})</option> )}
          </select>
        </div>
      </div>

      {/* end of gear */}

      <div className="form-group">
        <label className="medic">Psyche</label>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
      </div>
      <button
        className="btn btn-secondary b box"
        onClick={() => verifier()}
      >
        <i className="text-danger fas fa-trash o">Create</i>
      </button>
    </>
  );
};
