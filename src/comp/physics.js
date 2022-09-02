import React, { setState ,useState } from 'react';

export const  Pycontent = ()=>{
      return(<>
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
            <div className="form-group">
            <label className="medic">Medic options</label>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            </div>

            

               {/* extra space  */}
               <br></br>
                <button class="btn btn-secondary b" value="Next">
                     <i class="text-danger fas fa-trash o">Back</i>
                </button>

                <button className="btn btn-secondary b">
                     <i className="text-danger fas fa-trash o">Next</i>
                </button>
      </>)
} 