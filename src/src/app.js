import 'dotenv/config'

import{portServer} from './core/configs/index.js'



app.listen(portServer, () => {
 
    console.log(`Example app listening on port ${portServer}`)
  })