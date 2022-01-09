const express=require('express');
const app=express();


const databaseConnect=require('../backend/config/database');
const dotenv=require('dotenv');
const authRouter=require('./routes/authRoute');

dotenv.config({
    path:'backend/config/config.env'
});
const PORT=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send("OK");
})

app.use('/api/messenger',authRouter);


databaseConnect();

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})