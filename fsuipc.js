import fsuipcWasm from 'fsuipc-wasm';

const obj = new fsuipcWasm.FSUIPCWASM({
    // logLevel: fsuipcWasm.LogLevel.Enable,
  });
  
  async function test() {
    await obj.start();
  
    console.log('Started');
  
    console.log(obj.lvarValues);
    console.log(obj)
  
    obj.flagLvarForUpdate("I_OH_ELEC_EXT_PWR_U");
  
    obj.setLvarUpdateCallback((newLvars) => {
      console.log(newLvars);
      
    });
  
    // await obj.close();
  }
  
  test().catch(e => console.error(e));