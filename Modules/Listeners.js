import ws from "ws";
import { CalcA320FSwitchs, CalcA320FKnobs, VarstoRead } from "./Switches.js"

const fsuipcConnection = () => {
    const socket = new ws("ws://localhost:2048/fsuipc", "fsuipc")
    return socket
}

const FsuipcRefresh = (airplane, ws) => {
    console.log(airplane)
    var request = {
        command: 'vars.declare',
        name: airplane.airplane,
        vars: VarstoRead[airplane.airplane]
    }
    if (ws) {
        ws.send(JSON.stringify(request));
    }
}

const FsuipcListener = (ws, socketList) => {

    //Read
    ws.onmessage = function (msg) {

        var response = JSON.parse(msg.data);
        console.log(response)

        if (response.command == "offsets.declare") {


        } else if (response.command == "vars.read") {

            if (response.success === false) {

            } else {

                Object.keys(response.data).forEach((item) => {

                    Object.keys(socketList).forEach((conn) => {

                        var res = {}
                        res[item] = response.data[item]
                        socketList[conn].emit("CHANGEVAR", res)
                    })

                });
            }

        }
        else if (response.command == "vars.declare") {
            console.log(response)
            var request = {
                command: 'vars.read',
                name: response.name,
            }
            if (ws) {
                 ws.send(JSON.stringify(request));
            }

            request = {
                command: 'vars.read',
                name: response.name,
                changesOnly: true,
                interval: 100
            }
            if (ws) {
                 ws.send(JSON.stringify(request));
            }
        }
        else if (response.command == "offsets.read") {

        }

        else if (response.command == "vars.remove") {

        }

    }

    //Send
}


const SendA320FButtonCalc = (code, ws) => {

    var request = {
        command: 'vars.calc',
        name: 'calc',
        code: CalcA320FSwitchs[code][0]
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }
    setTimeout(() => {
        var request = {
            command: 'vars.calc',
            name: 'calc',
            code: CalcA320FSwitchs[code][1]
        }

        // send to the server as a JSON string
        if (ws) {
            ws.send(JSON.stringify(request));
        }
    }, 180);


}
const SendA320FKnobCalc = (code, value, ws) => {

    var request = {
        command: 'vars.calc',
        name: 'calc',
        code: CalcA320FKnobs[code][value]
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }

}


export { fsuipcConnection, SendA320FButtonCalc, SendA320FKnobCalc, FsuipcListener, FsuipcRefresh }