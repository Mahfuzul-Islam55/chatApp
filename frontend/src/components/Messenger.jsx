import React,{useEffect,useState,useRef} from 'react';
import {BsThreeDots,FaEdit,BiSearch} from 'react-icons/all';
import { ActiveFriend } from './ActiveFriend';
import { Friends } from './Friends';
import { RightSide } from './RightSide';
import {useDispatch,useSelector} from 'react-redux';
import { getFriends, messageSend,getMessage,imageMessageSend } from '../store/actions/messengerAction';
import {io} from 'socket.io-client';
import { SOCKET_MESSAGE } from '../store/types/messengerType';
export const Messenger = () => {

    const {friends,message}=useSelector(state=>state.messenger);
    const {myInfo}=useSelector(state=>state.auth);

    const [currentFriend,setCurrentFriend]=useState('');
    const [newMessage,setNewMessage]=useState('');
    const [activeUser,setActiveUser]=useState([]);
    const [socketMessage,setSocketMessage]=useState('');
    const [typingMessage,setTypingMessage]=useState('');

    const scrollRef=useRef();
    const socket=useRef();

    useEffect(()=>{
        socket.current=io('ws://localhost:8000');
        socket.current.on('getMessage',(data)=>{
            setSocketMessage(data);
        })
        socket.current.on('typingMessageGet',(data)=>{
            setTypingMessage(data);
        })
    },[])
    useEffect(()=>{
        if(socketMessage && currentFriend){
            if(socketMessage.senderId===currentFriend._id && socketMessage.receiverId===myInfo.id){
                dispatch({
                    type:SOCKET_MESSAGE,
                    payload:{
                        message:socketMessage
                    }
                })
            }
        }
        setSocketMessage('');
    },[socketMessage])

    useEffect(()=>{
        socket.current.emit('addUser',myInfo.id,myInfo);
    },[])

    useEffect(()=>{
        socket.current.on('getUser',(users)=>{
            const filterUser=users.filter(u=>u.userId!==myInfo.id);
            console.log(users);
            setActiveUser(filterUser);
        })
    },[])

    const inputHandle=(e)=>{
        setNewMessage(e.target.value);
        socket.current.emit('typingMessage',{
            senderId:myInfo.id,
            receiverId:currentFriend._id,
            message:e.target.value
        })
    }

    const sendMessage=(e)=>{
        e.preventDefault();
        const data={
            senderName:myInfo.userName,
            receiverId:currentFriend._id,
            message:newMessage?newMessage:'❤️'
        }
        socket.current.emit('sendMessage',{
            senderId:myInfo.id,
            senderName:myInfo.userName,
            receiverId:currentFriend._id,
            time:new Date(),
            message:{
                text:newMessage?newMessage:'❤️',
                image:''
            }
        })
        socket.current.emit('typingMessage',{
            senderId:myInfo.id,
            receiverId:currentFriend._id,
            message:''
        })
        dispatch(messageSend(data));
        setNewMessage('');
    }
    const emojiSend=(emoji)=>setNewMessage(`${newMessage}`+emoji);
    
    const imageSend=(e)=>{
        if(e.target.files[0]!==0){
            const imageName=e.target.files[0].name;
            const newImageName=Date.now()+imageName;
            
            const formData=new FormData();

            formData.append('senderName',myInfo.userName);
            formData.append('imageName',newImageName)
            formData.append('receiverId',currentFriend._id);
            formData.append('image',e.target.files[0]);

            dispatch(imageMessageSend(formData));
        }
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
        setNewMessage('');
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
                        <ActiveFriend user={activeUser} setCurrentFriend={setCurrentFriend}/>
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
                currentFriend?<RightSide typingMessage={typingMessage} activeUser={activeUser} imageSend={imageSend} emojiSend={emojiSend}scrollRef={scrollRef} message={message}sendMessage={sendMessage} inputHandle={inputHandle} newMessage={newMessage} currentFriend={currentFriend}/>:'Please select your friend from the friendlist'
            }
        </div>
    </div>
  )
}
