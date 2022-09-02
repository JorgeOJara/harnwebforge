import React, { setState ,useState } from 'react';

export const FamDev = ()=>{
      return(<>
        {/* descriptor */}
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

                <button class="btn btn-secondary b" value="Next">
                     <i class="text-danger fas fa-trash o">Back</i>
                </button>
      
                <button className="btn btn-secondary b" >
                     <i className="text-danger fas fa-trash o">Next</i>
                </button>

      </>)
} 