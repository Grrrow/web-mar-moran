const fs = require('fs')
fs.writeFileSync('./.env', `VITE_APP_EXAMPLE=${process.env.VITE_APP_EXAMPLE}\n`)
console.log(process.env.VITE_APP_EXAMPLE)
console.log(process.env.VUE_APP_EXAMPLE)