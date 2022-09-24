import React, { setState, useState } from "react";
import { objContent } from "./objContent";
import { ValueGetter } from "./variablesContainer";
import { makeitForMe } from "./autocharactercreationFunctionality";

// this component, its the form on the website, where the magic happens..
// IN here you can found all the form imputs also the desing and structure of the form

export const CHARACTERFORMCREATOR = (props) => {
  const dt = new ValueGetter();
  // const characterSchema  = new objContent;
  const autoBuild = new makeitForMe();

  const [Character, setCharacter] = useState(objContent);
  //console.log(Character);

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
          onChange={(e) => setCharacter({ Sex: e.target.value })}
        >
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
          onChange={(e) => setCharacter({Race : e.target.value})}
        >
          <option value="Caucasian">White / Caucasian</option>
          <option value="African American">African American</option>
          <option value="Asian">Chinese</option>
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
            onChange={(e) => setCharacter({Birthday : e.target.value})}
          />
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
            onChange={(e) => setCharacter({ birthPlace: e.target.value})}
          >
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
          {/* input type */}
          <label className="">Frame</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Scant</option>
            <option value="null">Light</option>
            <option value="null">Medium</option>
            <option value="null">Heavy</option>
            <option value="null">Massive</option>
            <option value="null">theammmmm</option>
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
          >
            <option value="null"></option>
            <option value="null">Brown</option>
            <option value="null">Black</option>
            <option value="null">Red</option>
            <option value="null">Silver</option>
            <option value="null">Blond</option>
          </select>
        </div>
        <div className="col">
          {/* input type */}
          <label className="">Eye Color</label>
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null"></option>
            <option value="null">Brown</option>
            <option value="null">Hazel</option>
            <option value="null">Gray</option>
            <option value="null">Violet</option>
            <option value="null">Green</option>
            <option value="null">Blue</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className=""> Hair Color</label>
        <select
          autoComplete="off"
          className="bg-secondary pl-2 text-white form-control"
          name="group"
        >
          <option value="null"></option>
          <option value="null">Brown</option>
          <option value="null">Black</option>
          <option value="null">Red</option>
          <option value="null">Silver</option>
          <option value="null">Blond</option>
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
        onClick={() => autoBuild.agilityAttribute("Heavy", "Khuzdul")}
      >
        <i className="text-danger fas fa-trash o">Create</i>
      </button>
    </>
  );
};
