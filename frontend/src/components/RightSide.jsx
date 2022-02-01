import React from 'react';
import { BsCameraVideoFill } from 'react-icons/bs';
import { HiDotsCircleHorizontal } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';
import { FriendInfo } from './FriendInfo';
import { Message } from './Message';
import { MessageSend } from './MessageSend';

export const RightSide = ({currentFriend,inputHandle,newMessage,sendMessage}) => {
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
                                  <img src={`/image/${currentFriend.image}`}></img>
                                  <div className="active-icon">

                                  </div>
                                  </div>
                                  <div className="name">
                                     <h3>{currentFriend.userName}</h3>
                                  </div>
                              </div>
                              <div className="icons">
                                  <div className="icon">
                                    <IoCall size={25}></IoCall>
                                  </div>
                                  <div className="icon">
                                    <BsCameraVideoFill size={25}></BsCameraVideoFill>
                                  </div>
                                  <div className="icon">
                                      <label htmlFor="dot"><HiDotsCircleHorizontal size={25}></HiDotsCircleHorizontal></label>
                                  </div>
                              </div>
                          </div>
                          <Message></Message>
                          <MessageSend inputHandle={inputHandle} newMessage={newMessage} sendMessage={sendMessage}></MessageSend>
                      </div>
                  </div>
                  <div className="col-4">
                      <FriendInfo currentFriend={currentFriend}></FriendInfo>
                  </div>
              </div>
          </div>
      </div>
  );
};
