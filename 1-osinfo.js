const os = require('node:os')


console.log('Os Info')
console.log('--------------------')


console.log('Os Name', os.platform())
console.log('Os Version',os.release())
console.log('Architecture', os.arch())
console.log('CPUs',os.cpus())
console.log('Free Memory', os.freemem() / 1024 / 1024)
console.log('Total Memory',os.totalmem() / 1024 / 1024)
console.log('Uptime',os.uptime() /60 /60)
