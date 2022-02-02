import React,{useEffect,useState,useRef} from 'react';
import {BsThreeDots,FaEdit,BiSearch} from 'react-icons/all';
import { ActiveFriend } from './ActiveFriend';
import { Friends } from './Friends';
import { RightSide } from './RightSide';
import {useDispatch,useSelector} from 'react-redux';
import { getFriends, messageSend,getMessage } from '../store/actions/messengerAction';
export const Messenger = () => {

    const {friends,message}=useSelector(state=>state.messenger);
    const {myInfo}=useSelector(state=>state.auth);

    const [currentFriend,setCurrentFriend]=useState('');
    const [newMessage,setNewMessage]=useState('');
    const scrollRef=useRef();

    const inputHandle=(e)=>setNewMessage(e.target.value);

    const sendMessage=(e)=>{
        e.preventDefault();
        const data={
            senderName:myInfo.userName,
            receiverId:currentFriend._id,
            message:newMessage?newMessage:'❤️'
        }
        dispatch(messageSend(data));
    }
    const emojiSend=(emoji)=>{
        setNewMessage(`${newMessage}`+emoji);
    }

    const dispatch=useDispatch();

    useEffect(()=>{
        if(friends && friends.length>0) setCurrentFriend(friends[0]);
        dispatch(getFriends());
    },[])

    useEffect(()=>{
        if(friends && friends.length>0) setCurrentFriend(friends[0]);
    },[friends])

    useEffect(()=>{
        dispatch(getMessage(currentFriend._id));
    },[currentFriend?._id])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:'smooth'})
    },[message])

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
                            <div onClick={()=>setCurrentFriend(fd)} className={currentFriend._id==fd._id?"hover-friend active":"hover-friend"}>
                                <Friends friend={fd}/>
                            </div>):'no friend'
                        }
                    </div>
                </div>
            </div>
            {
                currentFriend?<RightSide emojiSend={emojiSend}scrollRef={scrollRef} message={message}sendMessage={sendMessage} inputHandle={inputHandle} newMessage={newMessage} currentFriend={currentFriend}/>:'Please select your friend from the friendlist'
            }
        </div>
    </div>
  )
}
