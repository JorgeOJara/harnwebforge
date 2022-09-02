import React, { setState ,useState } from 'react';
import alita from './imgs/azula.jpg';



export const ProfileCopntent = (props)=>{
      return(
<>
    <img
        draggable="false"
        src={props.avatar}
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
       </div>
      </>             
)
}