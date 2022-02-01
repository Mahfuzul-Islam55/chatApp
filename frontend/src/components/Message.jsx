import React from 'react';
import { MdDynamicForm } from 'react-icons/md';
import { useSelector } from 'react-redux';
export const Message = ({message,currentFriend}) => {
    const {myInfo}=useSelector(state=>state.auth);
  return (
      <div className='message-show'>
          {
              message && message.length>0?message.map(m=>
                  m.senderId==myInfo.id? <div className="my-message">
                  <div className="image-message">
                      <div className="my-text">
                          <p className="message-text">{m.message.text}</p>
                      </div>
                  </div>
                  <div className="time">
                      30January,2022
                  </div>
              </div>: <div className="fd-message">
                <div className="image-message-time">
                    <img src={`/image/${currentFriend.image}`}></img>
                    <div className="message-time">
                        <div className="fd-text">
                            <p className='message-text'>{m.message.text}</p>
                        </div>
                        <div className="time">
                            5December,2021
                        </div>
                    </div>
                </div>
            </div>
              ):''
          }
        </div>
  );
};
