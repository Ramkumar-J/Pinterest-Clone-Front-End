import React from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Basic from './Drag';

function Pin() {
  return (
    <div className='container-fluid pin-bg'>
                <div className='add-pin'> 
                   <Link className='btn btn-light btn-lg mb-3' to="/addpin"><i class="bi bi-plus-lg"></i></Link> 
                   <button className='btn btn-secondary btn-lg'><i class="bi bi-image"></i></button>
                </div>
                <div className=''>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='row mt-5'>
                            <div className="col-lg-3"></div>
                            {/* Create pin area */}
                            <div className="col-lg-6">
                                <div class="row mt-5">
                                    <div className='col-lg-3'>
                                        <p>Create a Pin</p>
                                        </div>
                                        <div className='col-lg-3'>
                                        <p>Save from website</p>
                                        </div>
                                </div>
                                <div class="pin-container">
                                <div class="row mt-2">
                                    <div class="col-lg-6">
                                    <button class="btn btn-light rounded-circle"><i class="bi bi-three-dots"></i></button>
                                    </div>
                                    <div class="col-lg-6">
                                    <button class="btn btn-danger btn-small">Save</button>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-lg-6 ">
                                    {/* <img className="img-fluid img-size" src="https://images.unsplash.com/photo-1616628188550-808682f3926d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" placeholder=''></img> */}
                                    <Basic></Basic>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="row mt-2">
                                            <div class="col-lg-12">
                                            <input class="input-box mt-3" type={"text"} placeholder="Add a Title"></input>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12">
                                        <img class="img-fluid me-2 img-user" src="https://i.pinimg.com/75x75_RS/24/30/d2/2430d22def035ed725bffcafd7e275a7.jpg"></img><span>about pin😍🤩</span>
                                        </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-lg-12">
                                            <textarea class="mt-3 w-100" rows="1" type={"text"} placeholder="Tell everyone what is your pin about"></textarea>
                                            </div>
                                        </div>
                                        <div class="row mt-5">
                                            <div class="col-lg-12">
                                            <input class="input-box mt-3 fs-5 fw-light" type={"text"} placeholder="Add a destination link"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-3"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>     
    </div>
  )
}

export default Pin