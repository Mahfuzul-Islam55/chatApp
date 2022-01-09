import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const [state,setState]=useState({
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
        image:'',
    });

    const [loadImage,setLoadImage]=useState('');

    const inputHandler=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
   
    const fileHandler=(e)=>{
        if(e.target.files[0]!==0){
            setState({
                ...state,
                [e.target.name]:e.target.value
            })
        }
        const reader=new FileReader();
        reader.onload=(e)=>{
            setLoadImage(reader.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    const register=(e)=>{
        const {userName,email,password,confirmPassword,image}=state;
        const formData=new FormData();
        formData.append('userName',userName);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('confirmPassword',confirmPassword);
        formData.append('image',image);

        e.preventDefault();
        console.log(state);
    }
    return (
       <div className="register">
           <div className="card">
               <div className="card-header">
                    <h3>Register</h3>
               </div>
               <div className="card-body">
                   <form onSubmit={register}>
                       <div className="form-group">
                           <label htmlFor="username" >User Name</label>
                           <input type="text" placeholder="User Name" className="form-control" id="username" name="userName" onChange={inputHandler} value={state.userName}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="email" >Email</label>
                           <input type="email" placeholder="Email" className="form-control" id="email" name="email" onChange={inputHandler} value={state.email} />
                       </div>
                       <div className="form-group">
                           <label htmlFor="password" >Password</label>
                           <input type="password" placeholder="Password" className="form-control" id="password" name="password"onChange={inputHandler} value={state.password}/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="confirmPassword" >Confirm Password</label>
                           <input type="password" placeholder="Confirm Password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={inputHandler} value={state.confirmPassword} />
                       </div>
                     
                       <div className="form-group">
                           <div className="file-image">
                               <div className="image">
                                   {loadImage?<img src={loadImage}></img>:''}
                               </div>
                               <div className="file">
                                   <label htmlFor="image">Select Image</label>
                                   <input type="file" className='form-control' id='image' onChange={fileHandler} name='image'/>
                               </div>
                           </div>
                       </div>

                       <div className="form-group">
                           <input type="submit" value="register" className='btn' />
                       </div>
                       <div className="form-group">
                           <span><Link to="/messenger/login">Login Your Account</Link></span>
                       </div>
                   </form>
               </div>
           </div>
       </div>
    )
}
