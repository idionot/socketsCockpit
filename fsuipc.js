import fsuipcWasm from 'fsuipc-wasm';
import { VarstoRead } from './Modules/Switches.js'

var fsuipcvars = {}

const obj = new fsuipcWasm.FSUIPCWASM({});




async function test() {
  await obj.start();


  obj.flagLvarForUpdate("I_OH_NAV_ADIRS_ON_BAT"); 
  obj.flagLvarForUpdate("I_OH_NAV_IR1_SWITCH_U"); 
  obj.flagLvarForUpdate("I_OH_NAV_IR1_SWITCH_L"); 
  obj.flagLvarForUpdate("I_OH_NAV_IR2_SWITCH_U"); 
  obj.flagLvarForUpdate("I_OH_NAV_IR2_SWITCH_L"); 
  obj.flagLvarForUpdate("I_OH_NAV_IR3_SWITCH_L"); 
  obj.flagLvarForUpdate("I_OH_NAV_IR3_SWITCH_U"); 
  obj.flagLvarForUpdate("I_OH_NAV_ADR1_L"); 
  obj.flagLvarForUpdate("I_OH_NAV_ADR2_L"); 
  obj.flagLvarForUpdate("I_OH_NAV_ADR3_L"); 

  obj.flagLvarForUpdate("I_OH_NAV_ADR1_U"); 
  obj.flagLvarForUpdate("I_OH_NAV_ADR2_U"); 
  obj.flagLvarForUpdate("I_OH_NAV_ADR3_U"); 

  obj.flagLvarForUpdate("S_OH_NAV_SYS_DISP"); 
  obj.flagLvarForUpdate("S_OH_NAV_DATA_DISP"); 
  obj.flagLvarForUpdate("S_OH_NAV_IR1_MODE"); 

  obj.flagLvarForUpdate("S_OH_NAV_IR2_MODE"); 
  obj.flagLvarForUpdate("S_OH_NAV_IR3_MODE"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_FAC_1_L"); 

  obj.flagLvarForUpdate("I_OH_FLT_CTL_FAC_1_U"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_SEC_1_U"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_ELAC_1_L"); 

  obj.flagLvarForUpdate("I_OH_FLT_CTL_ELAC_1_U"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_SEC_1_L"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_FAC_2_L"); 

  
  obj.flagLvarForUpdate("I_OH_FLT_CTL_FAC_2_U"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_SEC_2_U"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_ELAC_2_L"); 

  
  obj.flagLvarForUpdate("I_OH_FLT_CTL_ELAC_2_U"); 
  obj.flagLvarForUpdate("I_OH_FLT_CTL_SEC_2_L"); 
  

  obj.flagLvarForUpdate("I_OH_EVAC_COMMAND_L"); 
  obj.flagLvarForUpdate("I_OH_EVAC_COMMAND_U"); 
  obj.flagLvarForUpdate("S_OH_EVAC_COMMAND_Cover"); 


  obj.flagLvarForUpdate("I_OH_GPWS_FLAP_MODE_L"); 
  obj.flagLvarForUpdate("I_OH_GPWS_GS_MODE_L"); 
  obj.flagLvarForUpdate("I_OH_GPWS_LDG_FLAP3_L"); 

  obj.flagLvarForUpdate("I_OH_GPWS_SYS_U"); 
  obj.flagLvarForUpdate("I_OH_GPWS_TERR_L"); 
  obj.flagLvarForUpdate("I_OH_GPWS_TERR_U"); 





  obj.setLvarUpdateCallback((newLvars) => {
    console.log(newLvars)
  });
  // await obj.close();
}
test()
