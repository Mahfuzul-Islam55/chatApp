import React from 'react';

export const Friends = ({friend}) => {
  return (
        <div className='friend'>
            <div className="friend-image">
                <div className="image">
                    <img src={`/image/${friend.friendInfo.image}`} alt=""/>
                </div>
            </div>
            <div className="friend-name">
                <h4>{friend.friendInfo.userName}</h4>
            </div>
        </div>
        );
};
