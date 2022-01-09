import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
       <div className="register">
           <div className="card">
               <div className="card-header">
                    <h3>Register</h3>
               </div>
               <div className="card-body">
                   <div className="form">
                       <div className="form-group">
                           <label htmlFor="username" >User Name</label>
                           <input type="text" placeholder="User Name" className="form-control" id="username" />
                       </div>
                       <div className="form-group">
                           <label htmlFor="email" >Email</label>
                           <input type="email" placeholder="Email" className="form-control" id="email" />
                       </div>
                       <div className="form-group">
                           <label htmlFor="password" >Password</label>
                           <input type="password" placeholder="Password" className="form-control" id="password" />
                       </div>
                       <div className="form-group">
                           <label htmlFor="confirmPassword" >Confirm Password</label>
                           <input type="password" placeholder="Confirm Password" className="form-control" id="confirmPassword" />
                       </div>
                       <div className="form-group">
                           <div className="file-image">
                               <div className="image">
                                   
                               </div>
                               <div className="file">
                                   <label htmlFor="image">Select Image</label>
                                   <input type="file" className='form-control' id='image'/>
                               </div>
                           </div>
                       </div>

                       <div className="form-group">
                           <input type="submit" value="register" className='btn' />
                       </div>
                       <div className="form-group">
                           <span><Link to="/messenger/login">Login Your Account</Link></span>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}
