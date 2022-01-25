const formidable=require('formidable');
const validator=require('validator');
const registerModel=require('../models/authModel');
const fs=require('fs');
const bcrypt=require('bcrypt');
module.exports.userRegister=(req,res)=>{
    const form=formidable();
    form.parse(req,async(err,fields,files)=>{
        const {userName,email,password,confirmPassword}=fields;
        const image=files;
        const error=[];
        
        if(!userName){
            error.push('Please,provide user name');
        }
        if(!email){
            error.push('Please,provide email');
        }
        if(email && !validator.isEmail(email)){
            error.push('Please, provide valid email');
        }
        if(!password){
            error.push('Please,provide password');
        }
        if(!confirmPassword){
            error.push('Please,confirm your password');
        }
        if(password && confirmPassword && password!==confirmPassword){
            error.push('Your password and confirm password is not same');
        } 
        if(password && password.length<6){
            error.push('Your password length must be at least 6 character');
        }
        if(Object.keys(files).length===0){
            error.push('please provide user image');
        }
        if(error.length>0){
            res.status(400).json({error:{errorMessage:error}});
        }
        else{
            const getImageName=files.image.originalFilename;
            const randomNumber=Math.floor(Math.random()*99999);
            const newImageName=randomNumber+getImageName;

            files.image.originalFilename=newImageName;
            const newPath=__dirname+`../../../frontend/public/image/${files.image.originalFilename}`;

            try{
                const checkUser=await registerModel.findOne({email:email});
                if(checkUser){
                    res.status(404).json({error:{errorMessage:['Your email already exists.']}});
                }
                else{
                    fs.copyFile(files.image.filepath,newPath,async(error)=>{
                        if(!error){
                            const userCreate=await registerModel.create({
                                userName,
                                email,
                                password:await bcrypt.hash(password,10),
                                image:files.image.originalFilename
                            })
                        }
                    });
                }
            }catch(error){
                console.log(error);
            }
            console.log(getImageName);
            console.log(newImageName);
        }
    });
}