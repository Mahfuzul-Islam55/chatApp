import { FRIENDS_GET_SUCCESS, MESSAGE_GET_SUCCESS, MESSAGE_SEND_SUCCESS,IMAGE_MESSAGE_SEND, SOCKET_MESSAGE, MESSAGE_SEND_SUCCESS_CLEAR, UPDATE_FRIEND_MESSAGE } from "../types/messengerType";

const messengerState={
    friends:[],
    message:[],
    messageSendSuccess:false
}
export  const messengerReducer=(state=messengerState,action)=>{
    const {type,payload}=action;

    if(type===FRIENDS_GET_SUCCESS){
         return {
             ...state,
             friends:payload.friends
         }
    }
    if(type===MESSAGE_GET_SUCCESS){
        return{
            ...state,
            message:payload.message
        }
    }
    if(type===MESSAGE_SEND_SUCCESS || type===IMAGE_MESSAGE_SEND){
        return{
            ...state,
            message:[...state.message,payload.message],
            messageSendSuccess:true
        }
    }
    if(type===SOCKET_MESSAGE){
        return{
            ...state,
            message:[...state.message,payload.message]
        }
    }
    if(type===MESSAGE_SEND_SUCCESS_CLEAR){
        return{
            ...state,
            messageSendSuccess:false
        }
    }
    if(type===UPDATE_FRIEND_MESSAGE){
        const index=state.friends.findIndex(f=>f.friendInfo._id===payload.messageInfo.receiverId || f.friendInfo._id===payload.messageInfo.senderId);
        state.friends[index].messageInfo=payload.messageInfo;
        return state;
    }
    return state;

}