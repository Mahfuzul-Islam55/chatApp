import { FRIENDS_GET_SUCCESS, MESSAGE_GET_SUCCESS, MESSAGE_SEND_SUCCESS,IMAGE_MESSAGE_SEND, SOCKET_MESSAGE } from "../types/messengerType";

const messengerState={
    friends:[],
    message:[]
}
export  const messengerReducer=(state=messengerState,action)=>{
    const {type,payload}=action;

    if(type==FRIENDS_GET_SUCCESS){
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
            message:[...state.message,payload.message]
        }
    }
    if(type===SOCKET_MESSAGE){
        return{
            ...state,
            message:[...state.message,payload.message]
        }
    }
    return state;

}