import fs from "fs";
import { StartValidate } from "./LoginModule.js"


const ReadSettings = (credenciais) => {
    fs.readFile("./Settings/settings.json", "utf8", (err, jsonString) => {
        if (err) {

            return;
        }

        let settings = JSON.parse(jsonString)
        StartValidate(credenciais, settings, (sucess, data) => {
            if (sucess) {
                credenciais.connected = data.connected
                credenciais.forcedisconnect = data.forcedisconnect
                credenciais.username = data.username;

            } else {
                if (!data) {
                    credenciais.connected = true,
                        credenciais.username = ""
                }
            }
        })
    });
}

const UpdateSettings = (credenciais, data, socket) => {
    StartValidate(credenciais, data, (sucess, dt) => {
        if (sucess) {
            credenciais.connected = dt.connected
            credenciais.forcedisconnect = dt.forcedisconnect
            credenciais.username = dt.username;

            WriteFSArchive(data.email, data.pass, false)
            socket.emit("IDRESPONSE", credenciais)
        } else {
            if (!data) {
                credenciais.connected = true,
                    credenciais.username = ""
            } else {
                //TODO ERRO NA SENHA
                WriteFSArchive("", "", true)
            }
        }
    })
}



const WriteFSArchive = (email, pass, empty) => {
    let archive = `{"email" : "` + email + `", "pass":"` + pass + `"}`

    if (!empty) {
        if (email == undefined) {

        }
        else {
            fs.writeFile('./Settings/settings.json', archive, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
        }
    } else {
        fs.writeFile('./Settings/settings.json', archive, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }
}

export { ReadSettings, UpdateSettings }