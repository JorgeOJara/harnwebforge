// import { process_params } from 'express/lib/router';
import React, { setState ,useState } from 'react';


export const BirthContent = () =>{
      return(
<>
<div className="form-group">
       <label className="">Birth Atributes</label>
                              <div className="input-group">
                                <input
                                  maxLength={500}
                                  type="url"
                                  className="bg-secondary pl-2 text-white w-50 form-control"
                                  name="nick"
                                  placeholder="nothing"
                                />
                              </div>
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
                            <div className="form-group">
                              {/* <label className="">Birth Atributes</label> */}
                              <div className="input-group">
                                <input
                                  maxLength={100}
                                  type="url"
                                  className="bg-secondary pl-2 text-white w-50 form-control"
                                  name="SOCIAL-CLASS"
                                  placeholder="SOCIAL CLASS"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              {/* <label className="">Birth Atributes</label> */}
                              <div className="input-group">
                                <input
                                  maxLength={100}
                                  type="url"
                                  className="bg-secondary pl-2 text-white w-50 form-control"
                                  name="SOCIAL-CLASS"
                                  placeholder="CULTURE"
                                />
                              </div>
                            </div>

                              <button className="btn btn-secondary b" >
                                <i className="text-danger fas fa-trash o">Next</i>
                            </button>
      </>             
)
}