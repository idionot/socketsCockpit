import { createServer } from "http";
import { Server } from "socket.io";
import open from "open"

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
    console.log("connected")
    SendLightTest(socket)

    socket.on("SendInput", (data) => {
        console.log(data)
    })
});

let SendLightTest = (socket) => {
    setTimeout(() => {
        let data = {
            I_OH_NAV_ADIRS_ON_BAT: 1,
            I_OH_NAV_IR1_SWITCH_L: 1,
            I_OH_NAV_IR1_SWITCH_U: 1,
            I_OH_NAV_IR2_SWITCH_L: 1,
            I_OH_NAV_IR2_SWITCH_U: 1,
            I_OH_NAV_IR3_SWITCH_L: 1,
            I_OH_NAV_IR3_SWITCH_U: 1,


            I_OH_NAV_ADR1_SWITCH_L: 1,
            I_OH_NAV_ADR1_SWITCH_U: 1,
            I_OH_NAV_ADR2_SWITCH_L: 1,
            I_OH_NAV_ADR2_SWITCH_U: 1,
            I_OH_NAV_ADR3_SWITCH_L: 1,
            I_OH_NAV_ADR3_SWITCH_U: 1,

            I_OH_FLT_CTL_ELAC_1_L: 1,
            I_OH_FLT_CTL_ELAC_1_U: 1,
            I_OH_FLT_CTL_FAC_1_L: 1,
            I_OH_FLT_CTL_FAC_1_U: 1,
            I_OH_FLT_CTL_SEC_1_L: 1,
            I_OH_FLT_CTL_SEC_1_U: 1,

            I_OH_EVAC_COMMAND_U: 1,
            I_OH_EVAC_COMMAND_L: 1,

            I_OH_ELEC_EMERG_GEN_FAULT: 1,
            I_OH_ELEC_GEN1_LINE_L: 1,
            I_OH_ELEC_GEN1_LINE_U: 1,


            I_OH_GPWS_FLAP_MODE_L: 1,
            I_OH_GPWS_GS_MODE_L: 1,
            I_OH_GPWS_LDG_FLAP3_L: 1,
            I_OH_GPWS_SYS_L: 1,
            I_OH_GPWS_SYS_U: 1,
            I_OH_GPWS_TERR_L: 1,
            I_OH_GPWS_TERR_U: 1,

            I_OH_RCRD_GND_CTL_L: 1,

            I_OH_OXYGEN_CREW_OXYGEN_L: 1,
            I_OH_OXYGEN_PASSENGER_U: 1,

            I_OH_CALLS_EMER_L: 1,
            I_OH_CALLS_EMER_U: 1,

            I_OH_FIRE_APU_AGENT_L: 1,
            I_OH_FIRE_APU_AGENT_U: 1,
            I_OH_FIRE_APU_BUTTON: 1,
            I_OH_FIRE_APU_BUTTON_ON_BATT: 1,
            I_OH_FIRE_ENG1_AGENT1_L: 1,
            I_OH_FIRE_ENG1_AGENT1_U: 1,
            I_OH_FIRE_ENG1_AGENT2_L: 1,
            I_OH_FIRE_ENG1_AGENT2_U: 1,
            I_OH_FIRE_ENG1_BUTTON: 1,
            I_OH_FIRE_ENG2_AGENT1_L: 1,
            I_OH_FIRE_ENG2_AGENT1_U: 1,
            I_OH_FIRE_ENG2_AGENT2_L: 1,
            I_OH_FIRE_ENG2_AGENT2_U: 1,
            I_OH_FIRE_ENG2_BUTTON: 1,

            I_OH_HYD_BLUE_ELEC_PUMP_L: 1,
            I_OH_HYD_BLUE_ELEC_PUMP_U: 1,
            I_OH_HYD_ENG_1_PUMP_L: 1,
            I_OH_HYD_ENG_1_PUMP_U: 1,
            I_OH_HYD_ENG_2_PUMP_L: 1,
            I_OH_HYD_ENG_2_PUMP_U: 1,
            I_OH_HYD_PTU_L: 1,
            I_OH_HYD_PTU_U: 1,
            I_OH_HYD_YELLOW_ELEC_PUMP_L: 1,
            I_OH_HYD_YELLOW_ELEC_PUMP_U: 1,
            I_OH_FUEL_CENTER_1_L: 1,
            I_OH_FUEL_CENTER_1_U: 1,
            I_OH_FUEL_CENTER_2_L: 1,
            I_OH_FUEL_CENTER_2_U: 1,
            I_OH_FUEL_LEFT_1_L: 1,
            I_OH_FUEL_LEFT_1_U: 1,
            I_OH_FUEL_LEFT_2_L: 1,
            I_OH_FUEL_LEFT_2_U: 1,
            I_OH_FUEL_MODE_SEL_L: 1,
            I_OH_FUEL_MODE_SEL_U: 1,
            I_OH_FUEL_RIGHT_1_L: 1,
            I_OH_FUEL_RIGHT_1_U: 1,
            I_OH_FUEL_RIGHT_2_L: 1,
            I_OH_FUEL_RIGHT_2_U: 1,
            I_OH_FUEL_XFEED_L: 1,
            I_OH_FUEL_XFEED_U: 1,

            I_OH_ELEC_AC_ESS_FEED_L: 1,
            I_OH_ELEC_AC_ESS_FEED_U: 1,
            I_OH_ELEC_APU_GENERATOR_L: 1,
            I_OH_ELEC_APU_GENERATOR_U: 1,
            I_OH_ELEC_BAT1_L: 1,
            I_OH_ELEC_BAT1_U: 1,
            I_OH_ELEC_BAT2_L: 1,
            I_OH_ELEC_BAT2_U: 1,
            I_OH_ELEC_BUSTIE_L: 1,
            I_OH_ELEC_COMMERCIAL_L: 1,
            I_OH_ELEC_COMMERCIAL_U: 1,
            I_OH_ELEC_EXT_PWR_L: 1,
            I_OH_ELEC_EXT_PWR_U: 1,
            I_OH_ELEC_GALY_L: 1,
            I_OH_ELEC_GALY_U: 1,
            I_OH_ELEC_GEN1_L: 1,
            I_OH_ELEC_GEN1_U: 1,
            I_OH_ELEC_GEN2_L: 1,
            I_OH_ELEC_GEN2_U: 1,
            I_OH_ELEC_IDG1_U: 1,
            I_OH_ELEC_IDG2_U: 1,


            I_OH_PNEUMATIC_APU_BLEED_L: 1,
            I_OH_PNEUMATIC_APU_BLEED_U: 1,
            I_OH_PNEUMATIC_DITCHING_L: 1,
            I_OH_PNEUMATIC_ENG1_ANTI_ICE_L: 1,
            I_OH_PNEUMATIC_ENG1_ANTI_ICE_U: 1,
            I_OH_PNEUMATIC_ENG1_BLEED_L: 1,
            I_OH_PNEUMATIC_ENG1_BLEED_U: 1,
            I_OH_PNEUMATIC_ENG2_ANTI_ICE_L: 1,
            I_OH_PNEUMATIC_ENG2_ANTI_ICE_U: 1,
            I_OH_PNEUMATIC_ENG2_BLEED_L: 1,
            I_OH_PNEUMATIC_ENG2_BLEED_U: 1,
            I_OH_PNEUMATIC_HOT_AIR_AFT_CARGO_L: 1,
            I_OH_PNEUMATIC_HOT_AIR_AFT_CARGO_U: 1,
            I_OH_PNEUMATIC_RAM_AIR_L: 1,
            I_OH_PNEUMATIC_WING_ANTI_ICE_L: 1,
            I_OH_PNEUMATIC_WING_ANTI_ICE_U: 1,
            I_OH_PNEUMATIC_PACK_1_L: 1,
            I_OH_PNEUMATIC_PACK_1_U: 1,
            I_OH_PNEUMATIC_PACK_2_L: 1,
            I_OH_PNEUMATIC_PACK_2_U: 1,
            I_OH_PNEUMATIC_PRESS_MODE_L: 1,
            I_OH_PNEUMATIC_PRESS_MODE_U: 1,
            I_OH_PROBE_HEAT_L: 1,
            I_OH_PROBE_HEAT_U: 1,


            I_OH_ELEC_APU_MASTER_L: 1,
            I_OH_ELEC_APU_MASTER_U: 1,
            I_OH_ELEC_APU_START_L: 1,
            I_OH_ELEC_APU_START_U: 1,
            I_OH_INT_LT_EMER_OFF: 1,


        }
        socket.emit("CHANGELIGHT", data)


        setTimeout(() => {
            data = {
                I_OH_NAV_ADIRS_ON_BAT: 0,
                I_OH_NAV_IR1_SWITCH_L: 0,
                I_OH_NAV_IR1_SWITCH_U: 0,
                I_OH_NAV_IR2_SWITCH_L: 0,
                I_OH_NAV_IR2_SWITCH_U: 0,
                I_OH_NAV_IR3_SWITCH_L: 0,
                I_OH_NAV_IR3_SWITCH_U: 0,

                I_OH_NAV_ADR1_SWITCH_L: 0,
                I_OH_NAV_ADR1_SWITCH_U: 0,
                I_OH_NAV_ADR2_SWITCH_L: 0,
                I_OH_NAV_ADR2_SWITCH_U: 0,
                I_OH_NAV_ADR3_SWITCH_L: 0,
                I_OH_NAV_ADR3_SWITCH_U: 0,
                I_OH_FLT_CTL_ELAC_1_L: 0,
                I_OH_FLT_CTL_ELAC_1_U: 0,
                I_OH_FLT_CTL_FAC_1_L: 0,
                I_OH_FLT_CTL_FAC_1_U: 0,
                I_OH_FLT_CTL_SEC_1_L: 0,
                I_OH_FLT_CTL_SEC_1_U: 0,

                I_OH_EVAC_COMMAND_U: 0,
                I_OH_EVAC_COMMAND_L: 0,

                I_OH_ELEC_EMERG_GEN_FAULT: 0,
                I_OH_ELEC_GEN1_LINE_L: 0,
                I_OH_ELEC_GEN1_LINE_U: 0,

                I_OH_GPWS_FLAP_MODE_L: 0,
                I_OH_GPWS_GS_MODE_L: 0,
                I_OH_GPWS_LDG_FLAP3_L: 0,
                I_OH_GPWS_SYS_L: 0,
                I_OH_GPWS_SYS_U: 0,
                I_OH_GPWS_TERR_L: 0,
                I_OH_GPWS_TERR_U: 0,

                I_OH_RCRD_GND_CTL_L: 0,

                I_OH_OXYGEN_CREW_OXYGEN_L: 0,
                I_OH_OXYGEN_PASSENGER_U: 0,

                I_OH_CALLS_EMER_L: 0,
                I_OH_CALLS_EMER_U: 0,

                I_OH_FIRE_APU_AGENT_L: 0,
                I_OH_FIRE_APU_AGENT_U: 0,
                I_OH_FIRE_APU_BUTTON: 0,
                I_OH_FIRE_APU_BUTTON_ON_BATT: 0,
                I_OH_FIRE_ENG1_AGENT1_L: 0,
                I_OH_FIRE_ENG1_AGENT1_U: 0,
                I_OH_FIRE_ENG1_AGENT2_L: 0,
                I_OH_FIRE_ENG1_AGENT2_U: 0,
                I_OH_FIRE_ENG1_BUTTON: 0,
                I_OH_FIRE_ENG2_AGENT1_L: 0,
                I_OH_FIRE_ENG2_AGENT1_U: 0,
                I_OH_FIRE_ENG2_AGENT2_L: 0,
                I_OH_FIRE_ENG2_AGENT2_U: 0,
                I_OH_FIRE_ENG2_BUTTON: 0,

                I_OH_HYD_BLUE_ELEC_PUMP_L: 0,
                I_OH_HYD_BLUE_ELEC_PUMP_U: 0,

                I_OH_HYD_ENG_1_PUMP_L: 0,
                I_OH_HYD_ENG_1_PUMP_U: 0,
                I_OH_HYD_ENG_2_PUMP_L: 0,
                I_OH_HYD_ENG_2_PUMP_U: 0,
                I_OH_HYD_PTU_L: 0,
                I_OH_HYD_PTU_U: 0,
                I_OH_HYD_YELLOW_ELEC_PUMP_L: 0,
                I_OH_HYD_YELLOW_ELEC_PUMP_U: 0,
                I_OH_FUEL_CENTER_1_L: 0,
                I_OH_FUEL_CENTER_1_U: 0,
                I_OH_FUEL_CENTER_2_L: 0,
                I_OH_FUEL_CENTER_2_U: 0,
                I_OH_FUEL_LEFT_1_L: 0,
                I_OH_FUEL_LEFT_1_U: 0,
                I_OH_FUEL_LEFT_2_L: 0,
                I_OH_FUEL_LEFT_2_U: 0,
                I_OH_FUEL_MODE_SEL_L: 0,
                I_OH_FUEL_MODE_SEL_U: 0,
                I_OH_FUEL_RIGHT_1_L: 0,
                I_OH_FUEL_RIGHT_1_U: 0,
                I_OH_FUEL_RIGHT_2_L: 0,
                I_OH_FUEL_RIGHT_2_U: 0,
                I_OH_FUEL_XFEED_L: 0,
                I_OH_FUEL_XFEED_U: 0,



                I_OH_ELEC_AC_ESS_FEED_L: 0,
                I_OH_ELEC_AC_ESS_FEED_U: 0,
                I_OH_ELEC_APU_GENERATOR_L: 0,
                I_OH_ELEC_APU_GENERATOR_U: 0,
                I_OH_ELEC_BAT1_L: 0,
                I_OH_ELEC_BAT1_U: 0,
                I_OH_ELEC_BAT2_L: 0,
                I_OH_ELEC_BAT2_U: 0,
                I_OH_ELEC_BUSTIE_L: 0,
                I_OH_ELEC_COMMERCIAL_L: 0,
                I_OH_ELEC_COMMERCIAL_U: 0,
                I_OH_ELEC_EXT_PWR_L: 0,
                I_OH_ELEC_EXT_PWR_U: 0,
                I_OH_ELEC_GALY_L: 0,
                I_OH_ELEC_GALY_U: 0,
                I_OH_ELEC_GEN1_L: 0,
                I_OH_ELEC_GEN1_U: 0,
                I_OH_ELEC_GEN2_L: 0,
                I_OH_ELEC_GEN2_U: 0,
                I_OH_ELEC_IDG1_U: 0,
                I_OH_ELEC_IDG2_U: 0,


                I_OH_PNEUMATIC_APU_BLEED_L: 0,
                I_OH_PNEUMATIC_APU_BLEED_U: 0,
                I_OH_PNEUMATIC_DITCHING_L: 0,
                I_OH_PNEUMATIC_ENG1_ANTI_ICE_L: 0,
                I_OH_PNEUMATIC_ENG1_ANTI_ICE_U: 0,
                I_OH_PNEUMATIC_ENG1_BLEED_L: 0,
                I_OH_PNEUMATIC_ENG1_BLEED_U: 0,
                I_OH_PNEUMATIC_ENG2_ANTI_ICE_L: 0,
                I_OH_PNEUMATIC_ENG2_ANTI_ICE_U: 0,
                I_OH_PNEUMATIC_ENG2_BLEED_L: 0,
                I_OH_PNEUMATIC_ENG2_BLEED_U: 0,
                I_OH_PNEUMATIC_HOT_AIR_AFT_CARGO_L: 0,
                I_OH_PNEUMATIC_HOT_AIR_AFT_CARGO_U: 0,
                I_OH_PNEUMATIC_RAM_AIR_L: 0,
                I_OH_PNEUMATIC_WING_ANTI_ICE_L: 0,
                I_OH_PNEUMATIC_WING_ANTI_ICE_U: 0,
                I_OH_PNEUMATIC_PACK_1_L: 0,
                I_OH_PNEUMATIC_PACK_1_U: 0,
                I_OH_PNEUMATIC_PACK_2_L: 0,
                I_OH_PNEUMATIC_PACK_2_U: 0,
                I_OH_PNEUMATIC_PRESS_MODE_L: 0,
                I_OH_PNEUMATIC_PRESS_MODE_U: 0,
                I_OH_PROBE_HEAT_L: 0,
                I_OH_PROBE_HEAT_U: 0,



                I_OH_ELEC_APU_MASTER_L: 0,
                I_OH_ELEC_APU_MASTER_U: 0,
                I_OH_ELEC_APU_START_L: 0,
                I_OH_ELEC_APU_START_U: 0,
                I_OH_INT_LT_EMER_OFF: 0,




            }
            SendLightTest(socket)
            socket.emit("CHANGELIGHT", data)
        }, 2000)
    }, 2000)


}


httpServer.listen(4000);

console.log("listening")