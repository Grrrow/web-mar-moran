const fs = require('fs')
fs.writeFileSync('./.env', `VITE_APP_EXAMPLE=${process.env.VITE_APP_EXAMPLE}\n`)