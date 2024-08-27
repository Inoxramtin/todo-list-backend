
import {getTasksListByUserId, getTasksListById, createTask, updateTask, deleteTaskById} from '../model/tasks/task.js'

async function getTaskService(userId){
    const task = await getTasksListByUserId(userId) ;
    return task;
}

async function getTaskServiceId(Id){
    const task = await getTasksListById(Id) ;
    return task;
}
async function createTaskService(user_id,title , description, is_completed){
    const task = await createTask(user_id,title , description, is_completed);
    return task;
}

async function updateTaskService(id, title, description, is_completed){
    const task = await updateTask(id, title, description, is_completed)
    return task;
}

async function deleteTaskService(Id){
    const task = await deleteTaskById(Id) ;
    return task;
}


export{
    getTaskService,
    getTaskServiceId,
    createTaskService,
    updateTaskService,
    deleteTaskService
}