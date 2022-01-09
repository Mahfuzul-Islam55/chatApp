const express=require('express');
const app=express();


const databaseConnect=require('../backend/config/database');
const dotenv=require('dotenv');

dotenv.config({
    path:'backend/config/config.env'
});
const PORT=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("OK");
})


databaseConnect();

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})