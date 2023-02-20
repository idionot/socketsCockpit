import { Connection } from "./Modules/ConnectionsManager.js";
import { ReadSettings, UpdateSettings } from "./Modules/FileSystemModule.js";
import { fsuipcConnection } from "./Modules/Listeners.js";

let credenciais = {
    connected: false
}

ReadSettings(credenciais)
Connection(credenciais, fsuipcConnection())














