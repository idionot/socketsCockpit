import fsuipcWasm from 'fsuipc-wasm';

const obj = new fsuipcWasm.FSUIPCWASM({});




async function test() {
    await obj.start();
    console.log(obj.lvarValues)
  
  
  }
  
  test()