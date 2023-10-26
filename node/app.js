console.log('h')
let  x =1
let y =2
console.log(`${x}  + ${y} = ${x+y}`);

function multiply(a,b){
    console.log(`${a} * ${b} = ${a*b}`)
}
multiply(3,5)

const os = require('os') // bring 'os' library to my program
console.log(`Free memory = ${os.freemem / 1024 / 1024 } MB`)
console.log(`Total memory = ${os.totalmem() / 1024 / 1024 / 1024} GB`)

console.log(`Operating System: ${os.platform()}`);
console.log(`OS Version: ${os.version()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Home Directory: ${os.homedir()}`);
const cpus = os.cpus();
console.log(`Number of CPU Cores: ${cpus.length}`);
console.log('CPU Information:');
cpus.forEach((cpu, index) => {
  console.log(`  Core ${index + 1}: ${cpu.model}`);
});

console.log(`User Info:`);
console.log(`Username: ${os.userInfo().username}`);
console.log(`Home Directory: ${os.userInfo().homedir}`);