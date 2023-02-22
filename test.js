import ws from "ws";
const socket = new ws("ws://localhost:3000/server")

socket.onopen = function (){
    console.log("Conectou no servidor!")
    socket.send("Enviando uma menssagem que o servidor vai mandar de volta")
}

socket.onerror = function(){
    console.log("error")
}


socket.onmessage = function (msg)  {
    console.log(msg.data)
}