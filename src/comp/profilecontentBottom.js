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
            placeholder="Full Name"
          />
        </div>
  </>             
)
}