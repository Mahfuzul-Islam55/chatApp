const express=require('express');
const app=express();

const PORT=process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("OK");
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})