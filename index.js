var ws = require("ws");


var socket = new ws("ws://localhost:2048/fsuipc", "fsuipc")

var Lights = {
    overhead: {},
    pedestal: {},
    mip: {},
    fcu: {}
}




setTimeout(() => {
    console.log("Iniciando")
    CreateDeclarOH(socket)
    DeclareRadio(socket)

}, 5000);


socket.onmessage = function (msg) {
    var response = JSON.parse(msg.data);
    //console.log(response)

    if (response.command == "vars.declare") {
        ReadOH(response.name, socket)

    } else if (response.command == "vars.read") {
        Object.keys(response.data).forEach((item) => {
            Lights[response.name][item] = response.data[item]
        });
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
            //AdirPanel
            { name: 'I_OH_NAV_ADIRS_ON_BAT' },
            { name: 'I_OH_NAV_IR1_SWITCH_U' },
            { name: 'I_OH_NAV_IR1_SWITCH_L' },
            { name: 'I_OH_NAV_IR2_SWITCH_U' },
            { name: 'I_OH_NAV_IR2_SWITCH_L' },
            { name: 'I_OH_NAV_IR3_SWITCH_U' },
            { name: 'I_OH_NAV_IR3_SWITCH_L' },

            { name: 'I_OH_NAV_ADR1_L' },
            { name: 'I_OH_NAV_ADR2_L' },
            { name: 'I_OH_NAV_ADR3_L' },
            { name: 'I_OH_NAV_ADR1_U' },
            { name: 'I_OH_NAV_ADR2_U' },
            { name: 'I_OH_NAV_ADR3_U' },

            //FLT dos 2 lados
            { name: 'I_OH_FLT_CTL_ELAC_1_L' },
            { name: 'I_OH_FLT_CTL_ELAC_1_U' },
            { name: 'I_OH_FLT_CTL_ELAC_2_L' },
            { name: 'I_OH_FLT_CTL_ELAC_2_U' },
            { name: 'I_OH_FLT_CTL_FAC_1_L' },
            { name: 'I_OH_FLT_CTL_FAC_1_U' },
            { name: 'I_OH_FLT_CTL_FAC_2_L' },
            { name: 'I_OH_FLT_CTL_FAC_2_U' },
            { name: 'I_OH_FLT_CTL_SEC_1_L' },
            { name: 'I_OH_FLT_CTL_SEC_1_U' },
            { name: 'I_OH_FLT_CTL_SEC_2_L' },
            { name: 'I_OH_FLT_CTL_SEC_2_U' },
            { name: 'I_OH_FLT_CTL_SEC_3_L' },
            { name: 'I_OH_FLT_CTL_SEC_3_U' },

            //EVAC
            { name: 'I_OH_EVAC_COMMAND_L' },
            { name: 'I_OH_EVAC_COMMAND_U' },

            //EmerELEC

            { name: 'I_OH_ELEC_GEN1_LINE_L' },
            { name: 'I_OH_ELEC_GEN1_LINE_U' },
            { name: 'I_OH_ELEC_EMERG_GEN_FAULT' },

            //GPWS
            { name: 'I_OH_GPWS_FLAP_MODE_L' },
            { name: 'I_OH_GPWS_GS_MODE_L' },
            { name: 'I_OH_GPWS_LDG_FLAP3_L' },
            { name: 'I_OH_GPWS_SYS_L' },
            { name: 'I_OH_GPWS_SYS_U' },
            { name: 'I_OH_GPWS_TERR_L' },
            { name: 'I_OH_GPWS_TERR_U' },

            //RCRD

            { name: 'I_OH_RCRD_GND_CTL_L' },



        ]
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }

}

function ReadOH(varsName, ws) {

    var request = {
        command: 'vars.read',
        name: varsName, // Must match the name of a previous declare request
        changesOnly: true,
        interval: 200 // Receive regular updates every 200ms. Leave out, or set to 0 just get a single response.
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }

}

function DeclareRadio(ws) {
    var request = {
        command: 'offsets.declare',
        name: 'RadioData',
        offsets: [
            { name: 'comoneActive', address: 0x05C4, type: 'int', size: 4 },
            { name: 'comtwoActive', address: 0x05C8, type: 'int', size: 4 },
            { name: 'comoneStby', address: 0x05CC, type: 'int', size: 4 },
            { name: 'comtwoStby', address: 0x05D0, type: 'int', size: 4 },
            { name: 'transponder', address: 0x0354, type: 'int', size: 2 },



        ]
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }

}

function RadioRead(ws) {
    var request = {
        command: 'offsets.read',
        name: 'RadioData', // Must match the name of a previous declare request
        changesOnly: true,
        interval: 100 // Receive regular updates every 100ms. Leave out, or set to 0 just get a single response.
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }
}













function SendHvar(_hvar, ws) {
    var request = {
        command: 'vars.write',
        vars: [
            { name: _hvar }
        ]
    }
    if (ws) {
        ws.send(JSON.stringify(request));
    }
}


function SendCalc(_code, ws) {

    var request = {
        command: 'vars.calc',
        name: 'calc',
        code: _code
    }

    // send to the server as a JSON string
    if (ws) {
        ws.send(JSON.stringify(request));
    }

}