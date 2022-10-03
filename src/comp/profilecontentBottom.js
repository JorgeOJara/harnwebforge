import React, { setState ,useState } from 'react';
import alita from './imgs/alita.jpg';



export const ProfileCopntentBottom = ()=>{
      return(
<>
      <div className="form-group">
          <input
            required=""
            maxLength={80}
            type="text"
            className="bg-secondary pl-2 text-white form-control-lg form-control"
            name="name"
            placeholder="Name"
          />
        </div>

    <div className="form-group">
          <label className="">Display Name</label>
            <div className="input-group">
            <input
              maxLength={80}
              type="text"
              className="bg-secondary pl-2 text-white w-50 form-control"
              name="nick"
              placeholder="UCUPATION"
            />
            <input
              maxLength={32}
              type="text"
              className="bg-secondary pl-2 text-white form-control"
              name="tag"
              placeholder="Tag"
            />
          </div>
      </div>
  </>             
)
}