import express from 'express' ;
import{createTaskController, updateTaskController, getTasksByCategoryIdController, deleteTaskController}  from './controller.js'
import{getTasksByIdValidator, getTasksByUserIdValidator,updateTasksValidator,createTasksValidator}from './validation.js'
import{authValidationMiddlewares} from '../../core/middlewares/auth-midderwares.js'
const routerTask = express.Router();











routerTask.post('/api/createTask',authValidationMiddlewares, createTaskController)
routerTask.put('/api/updateTasks/:task_id', authValidationMiddlewares, updateTaskController)
routerTask.get('/api/getTaskByCategoryId/:category_id', authValidationMiddlewares, getTasksByCategoryIdController);
routerTask.delete('/api/deleteTask', authValidationMiddlewares, deleteTaskController)




export{
    routerTask
}