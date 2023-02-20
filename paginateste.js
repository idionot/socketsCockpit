import ws from "ws";


var socket = new ws("ws://localhost:2048/fsuipc", "fsuipc")

CreateDeclarOH()


socket.onmessage = function (msg) {
    var response = JSON.parse(msg.data);

    if (response.command == "vars.declare") {
        ReadOH(response.name, socket)

    } else if (response.command == "vars.read") {
        console.log(response.data)
        /**     Object.keys(response.data).forEach((item) => {
                Lights[response.name][item] = response.data[item]
            });*/
    }
    else if (response.command == "offsets.declare") {
        console.log(response)
        RadioRead(socket)
    }
    else if (response.command == "offsets.read") {
        console.log(response)
    }
    //console.log(Lights)
}






function CreateDeclarOH(ws) {
    var request = {
        command: 'vars.declare',
        name: 'overhead',
        vars: [
            { name: 'S_OH_NAV_SYS_DISP' },
            { name: 'S_OH_NAV_DATA_DISP' },
            { name: 'S_OH_NAV_IR1_MODE' },
        ]
    }

    if (ws) {
        ws.send(JSON.stringify(request));
    }
}

const ReadOH = (name, ws) => {

    var request = {
        command: 'vars.read',
        name: name, // Must match the name of a previous declare request
        changesOnly: true,
        interval: 200 // Receive regular updates every 200ms. Leave out, or set to 0 just get a single response.
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }
}


