const io=require('socket.io')(8000,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
})

let users=[];
const addUser=(userId,socketId,userInfo)=>{
    const checkUser=users.some(u=>u.userId===userId);

    if(!checkUser) users.push({userId,socketId,userInfo});
    console.log(users);
}
io.on('connection',(socket)=>{
    console.log('socket is connecting....');
    socket.on('addUser',(userId,userInfo)=>{
        addUser(userId,socket.id,userInfo);
        io.emit('getUser',users);
    })
})