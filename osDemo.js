import os from "os";

// userInfo

console.log(os.userInfo());
console.log(os.totalmem());
console.log(os.freemem());
const percentFree = (os.freemem() / os.totalmem()) * 100;
console.log(`${percentFree}% free`);

console.log(os.cpus());
