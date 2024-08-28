import express from 'express' ;
import{taskByUserId, taskListByIdCategory, taskCreate,updateTask , taskDelete} from './controller.js'
import{getTasksByIdValidator, getTasksByUserIdValidator,updateTasksValidator,createTasksValidator}from './validation.js'
import{authValidationMiddlewares} from '../../core/middlewares/auth-midderwares.js'
const routerTask = express.Router();







routerTask.get('/api/tasks_list/:id', authValidationMiddlewares, taskListByIdCategory);



routerTask.post('/api/createTask',authValidationMiddlewares, taskCreate)


routerTask.put('/api/tasksUpdate/:id', authValidationMiddlewares , updateTask );

routerTask.delete('/api/tasks_list/:id',getTasksByIdValidator ,taskDelete)





export{
    routerTask
}