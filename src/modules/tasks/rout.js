import express from 'express' ;
import{taskByUserId, taskById, taskcreate,taskUpdate , taskDelet} from './controller.js'
import{getTasksByIdValidator, getTasksByUserIdValidator,updateTasksValidator,createTasksValidator}from './validation.js'

const routerTask = express.Router();






routerTask.get('/api/tasks_list/:user_id', getTasksByUserIdValidator ,taskByUserId );

routerTask.get('/api/tasks_id/:id',getTasksByIdValidator , taskById);



routerTask.post('/api/tasks_list',createTasksValidator, taskcreate)


routerTask.put('/api/tasks_list/:id',getTasksByIdValidator ,updateTasksValidator, taskUpdate );

routerTask.delete('/api/tasks_list/:id',getTasksByIdValidator ,taskDelet)





export{
    routerTask
}