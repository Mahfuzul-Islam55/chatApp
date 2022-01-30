import React from 'react';
import { AiFillGift } from 'react-icons/ai';
import { BiMessageAltEdit } from 'react-icons/bi';
import { BsPlusCircle } from 'react-icons/bs';
import { RiGalleryLine } from 'react-icons/ri';

export const MessageSend = () => {

    const emojis = [
        '😀', '😃', '😄', '😁',
        '😆', '😅', '😂', '🤣',
        '😊', '😇', '🙂', '🙃',
        '😉', '😌', '😍', '😝',
        '😜', '🧐', '🤓', '😎',
        '😕', '🤑', '🥴', '😱'
    ]

  return (
      <div className="message-send-section">
          <input type="checkbox" id='emoji' />
          <div className="file hover-attachment">
              <div className="add-attachment">
                  Add Attacment
              </div>
              <BsPlusCircle/>
          </div>
          <div className="file hover-image">
              <div className="add-image">
                Add Image
              </div>
              <input type="file" id="pic" className="form-control" />
              <label htmlFor="pic"><RiGalleryLine></RiGalleryLine></label>
          </div>
          <div className="file">
              <BiMessageAltEdit></BiMessageAltEdit>
          </div>
          <div className="file hover-gift">
              <div className="add-gift">
                Add Gift
              </div>
              <AiFillGift></AiFillGift>
          </div>
          <div className="message-type">
              <input type="text" name="message" id="message" placeholder="Aa" className="form-control" />
              <label htmlFor="emoji">😃</label>
          </div>
          <div className="file">
          ❤️
          </div>
            <div className="emoji-section">
                <div className="emoji">
                    {emojis.map(e=><span>{e}</span>)}
                </div>
            </div>
      </div>
  );
};
