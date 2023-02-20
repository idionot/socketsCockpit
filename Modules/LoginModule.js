const StartValidate = (credenciais, settingsOBJ, callback) => {
    console.log(settingsOBJ)
    if (settingsOBJ.email == "") {
        callback(false, false)
    }
    else {

        //FAZ A VALIDAÇÂO
        if (settingsOBJ.email == "teste@teste.com.br") {
            let valida = {
                connected: true,
                forcedisconnect: false,
                username: "Wanderli Eckel Junior"
            }
            callback(true, valida)
        }else{
            callback(false, false)
        }
    


    }
}

export { StartValidate }
