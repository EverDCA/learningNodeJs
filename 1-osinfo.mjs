import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'


console.log('Os Info')
console.log('--------------------')


console.log('Os Name', platform())
console.log('Os Version',release())
console.log('Architecture', arch())
console.log('CPUs',cpus())
console.log('Free Memory', freemem() / 1024 / 1024)
console.log('Total Memory',totalmem() / 1024 / 1024)
console.log('Uptime',uptime() /60 /60)
