import React from 'react';
import { BsCameraVideoFill } from 'react-icons/bs';
import { HiDotsCircleHorizontal } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';
import { FriendInfo } from './FriendInfo';
import { Message } from './Message';
import { MessageSend } from './MessageSend';

export const RightSide = () => {
  return (
      <div className="col-9">
          <div className="right-side">
              <input type="checkbox" id='dot'/>
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
                                      <label htmlFor="dot"><HiDotsCircleHorizontal></HiDotsCircleHorizontal></label>
                                  </div>
                              </div>
                          </div>
                          <Message></Message>
                          <MessageSend></MessageSend>
                      </div>
                  </div>
                  <div className="col-4">
                      <FriendInfo></FriendInfo>
                  </div>
              </div>
          </div>
      </div>
  );
};
