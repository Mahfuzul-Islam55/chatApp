import axios from 'axios';

export const userRegister=(data)=>{
    return async(dispatch)=>{

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const response=await axios.post('/api/messenger/user-register',data,config);
        }catch(error){
            console.log(error.response.data);   
        }
    }
}