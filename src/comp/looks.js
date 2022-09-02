import React, { setState ,useState } from 'react';


export const Apperrance = () =>{
      return(
      <> 
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
                    <label class="">Frame</label> 
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
                        <label class="">COMELINESS</label> 
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

               {/* extra space  */}
               <br></br>
                <button class="btn btn-secondary b" value="Next">
                     <i class="text-danger fas fa-trash o">Back</i>
                </button>
      
                <button className="btn btn-secondary b" >
                     <i className="text-danger fas fa-trash o">Next</i>
                </button>
       
      </>             
)
}