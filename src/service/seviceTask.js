
import { createTask, updateTask, getTaskByCategoryId, deleteTask} from '../model/tasks/task.js'



async function createTaskService(userId, categoryId, description, isCompleted) {
    try {
        const tasks = await createTask(userId, categoryId, description, isCompleted);
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error; 
    }
}
async function updateTaskService(taskId, userId, categoryId, description, isCompleted) {
    const tasks= await updateTask(taskId, userId, categoryId, description, isCompleted);
    return tasks;
}


async function getTaskByCategoryIdService(userId, category_id) {
    const tasks = await getTaskByCategoryId(userId, category_id);
    return tasks;
    
}

async function deleteTaskService(user_id, id , category_id) {
    const tasks = await deleteTask(user_id, id , category_id)
    return tasks;
}

export{
    createTaskService,
    updateTaskService,
    getTaskByCategoryIdService,
    deleteTaskService
}
