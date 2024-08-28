import express from 'express' ;
import{taskByUserId, taskById, taskCreate,updateTask , taskDelete} from './controller.js'
import{getTasksByIdValidator, getTasksByUserIdValidator,updateTasksValidator,createTasksValidator}from './validation.js'
import{authValidationMiddlewares} from '../../core/middlewares/auth-midderwares.js'
const routerTask = express.Router();






routerTask.get('/api/tasks_list/:user_id', getTasksByUserIdValidator ,taskByUserId );

routerTask.get('/api/tasks_id/:id',getTasksByIdValidator , taskById);



routerTask.post('/api/tasks_list',authValidationMiddlewares, taskCreate)


routerTask.put('/api/tasks_list', authValidationMiddlewares , updateTask );

routerTask.delete('/api/tasks_list/:id',getTasksByIdValidator ,taskDelete)





export{
    routerTask
}