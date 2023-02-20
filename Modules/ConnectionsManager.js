import { createServer } from "http";
import { Server } from "socket.io";
import { FsuipcListener, SendA320FButtonCalc, SendA320FKnobCalc, FsuipcRefresh } from "./Listeners.js"


let socketList = {}

const Connection = (credenciais, ws) => {
    const httpServer = createServer();
    const io = new Server(httpServer, {
        cors: {
            origin: '*',
            allowedHeaders: ["authorization"]
        }
        ,
        transports: ["websocket"]

    });

    io.on("connection", (socket) => {
        socket.on("REFRESHVARS", (airplane) => {
            FsuipcRefresh(airplane, ws, socketList)


        })

        socket.on("GETID", (data) => {
            // console.log("GETID", data)
            socketList[data] = socket
            socket.emit("IDRESPONSE", credenciais)
        })



        socket.on("INPUTSEND", (data) => {
            console.log("dataNO31:", data)
            if (data.airplane === "a320fenix") {
               // SendA320FButtonCalc(data.button, ws)
            }


        })
        socket.on("KNOBCHANGE", (data) => {
            console.log(data)
            if (data.airplane === "a320fenix") {

               // SendA320FKnobCalc(data.knob, data.value, ws)
            }

        })


        socket.on("FORMSEND", (data) => {
            UpdateSettings(credenciais, data, socket)
        })


        socket.on("disconnection", () => {
            Object.keys(socketList).forEach((item) => {
                if (socketList[item].id === socket.id)

                    delete socketList[item]
            });
        })
    });

    function SendForEach() {
        setTimeout(() => {
            FsuipcListener(ws, socketList)
            console.log("FSUIPC Connected")
        }, 2000)
    }

    SendForEach()
    httpServer.listen(4000);

    console.log("listening the vars")

}


export { Connection, socketList }