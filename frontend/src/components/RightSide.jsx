import React from 'react';
import { BsCameraVideoFill } from 'react-icons/bs';
import { HiDotsCircleHorizontal } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';

export const RightSide = () => {
  return (
      <div className="col-9">
          <div className="right-side">
              <div className="row">
                  <div className="col-8">
                      <div className="message-send-show">
                          <div className="header">
                              <div className="image-name">
                                  <div className="image">
                                  <img src="/image/23040ddd.png"></img>
                                  <div className="active-icon">

                                  </div>
                                  </div>
                                  <div className="name">
                                     <h3>Mahfuzul Islam</h3>
                                  </div>
                              </div>
                              <div className="icons">
                                  <div className="icon">
                                    <IoCall></IoCall>
                                  </div>
                                  <div className="icon">
                                    <BsCameraVideoFill></BsCameraVideoFill>
                                  </div>
                                  <div className="icon">
                                      <HiDotsCircleHorizontal></HiDotsCircleHorizontal>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-4">
                      <h1>Friend Information Section</h1>
                  </div>
              </div>
          </div>
      </div>
  );
};
