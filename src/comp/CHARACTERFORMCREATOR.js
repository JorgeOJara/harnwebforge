import React, { setState ,useState } from 'react';
import { objContent } from './objContent';
import  { ValueGetter } from './variablesContainer';
import { makeitForMe } from './autocharactercreationFunctionality';

// this component, its the form on the website, where the magic happens..
// IN here you can found all the form imputs also the desing and structure of the form

export const CHARACTERFORMCREATOR = (props) =>{
  const dt =  new ValueGetter();
  // const characterSchema  = new objContent;
  const autoBuild = new makeitForMe();

  function roll(number){
   let  min = Math.ceil(1);
   let  max = Math.floor(number); 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

      return(
<>
<form className="form-group">
<label className="">Birth Atributes</label>
<div className="input-group">
            <input
              id="avUrl"
              maxLength={250}
              type="url"
              className="bg-secondary pl-2 text-white w-50 form-control"
              onChange={event=>props.changeAvatar(event.target.value)}
              placeholder="AVATAR URL"
            />
          </div>
    </form>
            {/* gender */}
            <div className="form-group">
          {/* <label class="">Group</label>  */}
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null">Sex</option>
            <option value="null">Female</option>
            <option value="null">Male</option>
          </select>
        </div>
        {/* race */}

        <div className="form-group">
          {/*  <label class="">Group</label>  */}
          <select
            autoComplete="off"
            className="bg-secondary pl-2 text-white form-control"
            name="group"
          >
            <option value="null">Race</option>
            <option value="null">white</option>
            <option value="null">Black</option>
            <option value="null">Chinese</option>
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
<div class="col">
<label class="">Birth Place</label> 
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
        <div class="col">

<label class="">Culture</label> 
      <h5>Viking</h5>
        </div>
      </div>

      <div class="row form-group">
{/* input type */}
<div class="col">
<label class="">Social Class</label> 
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
<div class="row form-group">
{/* input type */}
<div class="col">
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
<div class="col">
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
<div class="row form-group">
{/* input type */}
<div class="col">
<label class="">COMELINESS</label> 
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
<div class="col">
    {/* input type */}
    <label class="">Frame</label> 
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
  <div class="row form-group">
{/* input type */}
<div class="col">
<label class="">complexion</label> 
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
<div class="col">
    {/* input type */}
    <label class="">Eye Color</label> 
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
            <label class=""> Hair Color</label> 
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

<div class="row form-group">
{/* input type */}
<div class="col">
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
<div class="col">
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
<div class="col">
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

<div class="row form-group">
{/* input type */}
<div class="col">
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
<div class="col">
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
<div class="col">
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
<div class="row form-group">
{/* input type */}
<div class="col">
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
<div class="col">
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
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
</div>


{/* Personality Attributes */}

<div class="row form-group">
{/* input type */}
<div class="col">
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
<div class="col">
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
<div class="col">
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

<div class="row form-group">
{/* input type */}
<div class="col">
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
<div class="col">
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
<div class="col">
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

<div class="row form-group">
<div class="col">
<label class="">Weapon</label> 
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
<div class="col">
<label class="">Weapon</label> 
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

<div class="row form-group">
<div class="col">
<label class="">Weapon</label> 
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
<div class="col">
<label class="">Weapon</label> 
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

<div class="row form-group">
<div class="col">
<label class="">Weapon</label> 
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
<div class="col">
<label class="">Weapon</label> 
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
<div class="row form-group">
<div class="col">
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
<div class="col">
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
</div> 

<div class="row form-group">
<div class="col">
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
<div class="col">
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
</div> 

<div class="row form-group">
<div class="col">
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
<div class="col">
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
</div> 
<div class="row form-group">
<div class="col">
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
<div class="col">
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
</div> 

<div class="row form-group">
<div class="col">
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
<div class="col">
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
</div> 

<div class="row form-group">
<div class="col">
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
<div class="col">
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
</div> 
<div class="row form-group">
<div class="col">
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
<div class="col">
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
</div> 
{/* end or gear */}

<div className="form-group">
<label className="medic">Psyche</label>
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
</div>
  <button className="btn btn-secondary b"
  onClick={()=>autoBuild.agilityAttribute("Heavy","Khuzdul")}
  >
        <i className="text-danger fas fa-trash o">Create</i>
</button>
</>             
)
}