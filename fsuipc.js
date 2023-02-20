import fsuipcWasm from 'fsuipc-wasm';
import { VarstoRead } from './Modules/Switches.js'

var fsuipcvars = {}

VarstoRead.a320fenix.forEach((value, index) => {
  const obj = new fsuipcWasm.FSUIPCWASM({});
  test()
})





async function test(value) {
  await obj.start();
  obj.flagLvarForUpdate(value);

  obj.setLvarUpdateCallback((newLvars) => {
    console.log(newLvars);
    fsuipcvars[value] = obj
  });
  // await obj.close();
}
