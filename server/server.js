const path = require('path');
var http = require("http")
const express = require('express');
const socketIO= require("socket.io")

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPath));

io.on("connection",(socket)=>{
  console.log("new user connected")

  socket.emit("newEmail",{
    from:"hina243@exp.com",
    text:"hey nomiii",
    createdAt:123
  })
  
  socket.emit("newMessage",{
    from:"hina",
    text:"what are you doing",
    createdAt:4325
  })
 

  socket.on("createMessage",(newMessage)=>{
    console.log("createMessage ",newMessage)
  })
  socket.on("disconnect",()=>{
    console.log("disconnected from server")
  })
})

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});



