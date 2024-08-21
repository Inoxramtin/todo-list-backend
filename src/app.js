import 'dotenv/config'
import express from 'express' ;
import{portServer} from './core/configs/index.js'
import { routerUser as User } from './modules/users/rout.js';
import{routerTask as Task} from './modules/tasks/rout.js'
import{ apiLoggerMiddlewares, errorMiddlewares, corsMiddlewares} from './core/middlewares/express-middlewars.js'
const app = express();

app.use(corsMiddlewares)

app.use(express.json()); 
app.use( apiLoggerMiddlewares);


app.get('/text', (req , res) =>{
    res.json({
        message: 'Express js app is running'
    });
});


app.use(User);
app.use(Task);


app.use(errorMiddlewares);

app.listen(portServer, () => {
 
    console.log(`Example app listening on port ${portServer}`)
  })