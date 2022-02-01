import React,{useEffect} from 'react';
import {BsThreeDots,FaEdit,BiSearch} from 'react-icons/all';
import { ActiveFriend } from './ActiveFriend';
import { Friends } from './Friends';
import { RightSide } from './RightSide';
import {useDispatch,useSelector} from 'react-redux';
import { getFriends } from '../store/actions/messengerAction';
export const Messenger = () => {

    const {friends}=useSelector(state=>state.messenger);
    const {myInfo}=useSelector(state=>state.auth);
    const dispatch=useDispatch();
    console.log(friends);

    useEffect(()=>{
        dispatch(getFriends());
    },[])

  return (
    <div className="messenger">
        <div className="row">
            <div className="col-3">
                <div className="left-side">
                    <div className="top">
                        <div className="image-name">
                            <div className="image">
                                    <img src={`/image/${myInfo.image}`}></img>
                            </div>
                            <div className="name">
                                <h3>{myInfo.userName}</h3>
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
                    <div className="active-friends">
                        <ActiveFriend></ActiveFriend>
                    </div>
                    <div className="friends">
                        {
                            friends && friends.length>0? friends.map(fd=>
                            <div className="hover-friend">
                                <Friends friend={fd}/>
                            </div>):'no friend'
                        }
                    </div>
                </div>
            </div>
            <RightSide></RightSide>
        </div>
    </div>
  )
}
