import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

export const FriendInfo = ({currentFriend}) => {
  return (
      <div className="friend-info">
          <input type="checkbox" id='gallary' />
          <div className="image-name">
              <div className="image">
                    <img src={`/image/${currentFriend.image}`}></img>
              </div>
              <div className="active-user">
                  Active
              </div>
              <div className="name">
                  <h4>{currentFriend.userName}</h4>
              </div>
          </div>
          <div className="others">
              <div className="custom-chat">
                 <h3>Customized Chat</h3>
                 <BsChevronDown></BsChevronDown>
              </div>
              <div className="privacy">
                <h3>Privacy and Support</h3>
                <BsChevronDown></BsChevronDown>
              </div>
              <div className="media">
                <h3>Shared Media</h3>
                <label htmlFor='gallary'><BsChevronDown></BsChevronDown></label>
              </div>
          </div>
          <div className="gallary">
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>
              <img src="/image/23040ddd.png"></img>

          </div>
      </div>
  );
};
