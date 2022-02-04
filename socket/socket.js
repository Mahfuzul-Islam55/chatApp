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
const userRemove=(socketId)=>users=users.filter(u=>u.socketId!==socketId);

const findFriends=(id)=>users.find(u=>u.userId==id);
io.on('connection',(socket)=>{
    console.log('socket is connected....');
    socket.on('addUser',(userId,userInfo)=>{
        addUser(userId,socket.id,userInfo);
        io.emit('getUser',users);
    })
    socket.on('disconnect',()=>{
        console.log('user disconnect..');
        userRemove(socket.id);
        io.emit('getUser',users);
    })
    socket.on('sendMessage',(data)=>{
        const user=findFriends(data.receiverId);
        if(user!==undefined){
            socket.to(user.socketId).emit('getMessage',data);
        }
    })
    socket.on('typingMessage',(data)=>{
        const user=findFriends(data.receiverId);
        if(user!==undefined){
            socket.to(user.socketId).emit('typingMessageGet',{
                senderId:data.senderId,
                receiverId:data.receiverId,
                message:data.message
            })
        }
    })
})