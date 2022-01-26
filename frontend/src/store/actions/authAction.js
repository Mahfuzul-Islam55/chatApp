import axios from 'axios';
import {REGISTER_FAIL,REGISTER_SUCCESS} from '../types/authTypes';

export const userRegister=(data)=>{
    return async(dispatch)=>{

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const response=await axios.post('/api/messenger/user-register',data,config);
             console.log(response);
             localStorage.setItem('authToken',response.data.token);
             dispatch({
                 type:REGISTER_SUCCESS,
                 payload:{
                     successMessage:response.data.successMessage,
                     token:response.data.token
                 }
             })

        }catch(error){
            console.log(error.response.data.error.errorMessage)
            dispatch({
                type:REGISTER_FAIL,
                payload:{
                    error:error.response.data.error.errorMessage
                }
            });
        }
    }
}