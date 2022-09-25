import React, { setState, useState } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";
import { makeitForMe } from "./autocharactercreationFunctionality";

// this component, its the form on the website, where the magic happens..
// IN here you can found all the form imputs also the desing and structure of the form

export const CHARACTERFORMCREATOR = (props) => {
  const dt = new ValueGetter();

  const autoBuild = new makeitForMe();

  // schema .. of the character
  const [Character, setCharacter] = useState(objContent);
  
  // setting up the data on the object.....

  const setSex = (e) => {let updatedValue = {Sex:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

  const setRace = (e) => {let updatedValue = {Race:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}


  const setSunsigns = (e) => {let updatedValue = {Sunsigns:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}


  const setbirthPlace = (e) => {let updatedValue = {birthPlace:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}



  const setSocialClass = (e) => {let updatedValue = {SocialClass:e.target.value};
  setCharacter(Character => ({...Character,...updatedValue}));}

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



// still neeed to keep adding inputs.............

  function roll(number) {
    let min = Math.ceil(1);
    let max = Math.floor(number);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <>
      <form className="form-group">
        <label className="">Birth Atributes</label>
        <div className="input-group">
          <input
            id="avUrl"
            maxLength={250}
            type="url"
            className="bg-secondary pl-2 text-white w-50 form-control"
            onChange={(event) => props.changeAvatar(event.target.value)}
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
          <option value="Female">Female</option>
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
          <option value="Humman">Humman</option>
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
          <h4>Taurus</h4>
        </div>
        <div className="col">
          <label className="" />
          {/*    <input type="number" class="pl-2 text-white overflow-hidden form-control-plaintext" name="posts"  placeholder=""> */}
        </div>
      </div>

      {/* here */}
      <div class="row form-group">
        {/* input type */}
        <div className="col">
          <label className="">Birth Place</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
            onChange={e => setbirthPlace(e)}
          >
            {/* wee need a table of birth places */}

            <option value="ugly">Ugly</option>
            <option value="plain">Plain</option>
            <option value="average">Average</option>
            <option value="attractive">Attractive</option>
            <option value="handsome">Handsome</option>

          </select>
        </div>
        <div className="col">
          <label className="">Culture</label>
          <h5>Viking</h5>
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
            <option value="Ugly">Ugly</option>
            <option value="Plain">Plain</option>
            <option value="Average">Average</option>
            <option value="Attractive">Attractive</option>
            <option value="Handsome">Handsome</option>
          </select>
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
          {/* input type */}
          <label className="">Deity</label>
          <div className="input-group">
            <input
              maxLength={500}
              type="number"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="10"
              onChange={e =>{setdeity(e)}}
            />
          </div>
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
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
        <div className="col">
          <label className="">Weapon</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
      </div>

      {/* gear */}
      <div className="row form-group">
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label class="">Armor</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
          </select>
        </div>
        <div className="col">
          <label className="">Armor</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Ugly</option>
            <option value="null">Plain</option>
            <option value="null">Average</option>
            <option value="null">Attractive</option>
            <option value="null">Handsome</option>
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
        className="btn btn-secondary b"
        onClick={() => console.table(Character)}
      >
        <i className="text-danger fas fa-trash o">Create</i>
      </button>
    </>
  );
};
