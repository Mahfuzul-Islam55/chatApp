import React from 'react';
import {BsThreeDots,FaEdit,BiSearch} from 'react-icons/all';
export const Messenger = () => {

  return (
    <div className="messenger">
        <div className="row">
            <div className="col-3">
                <div className="left-side">
                    <div className="top">
                        <div className="image-name">
                            <div className="image">
                                <img src="/image/23040ddd.png"></img>
                            </div>
                            <div className="name">
                                <h3>Mahfuzul Islam</h3>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="icon">
                                <BsThreeDots></BsThreeDots>
                            </div>
                            <div className="icon">
                                <FaEdit></FaEdit>
                            </div>
                        </div>
                    </div>
                    <div className="friend-search">
                        <div className="search">
                            <button><BiSearch></BiSearch></button>
                            <input type="text" placeholder="search" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}