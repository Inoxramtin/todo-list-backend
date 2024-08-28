
import {getTasksListByUserId, getTasksListById, createTask, updateTask, deleteTaskById,findCategoryIdByName,findTaskIdByUserCategoryAndTitle} from '../model/tasks/task.js'

async function getTaskService(userId){
    const task = await getTasksListByUserId(userId) ;
    return task;
}

async function getTaskServiceId(Id){
    const task = await getTasksListById(Id) ;
    return task;
}

async function updateTaskService(categoryName, newDescription, description, is_completed, userId) {
    const categoryId = await findCategoryIdByName(categoryName, userId);
    if (!categoryId) {
        throw new Error('Category not found for this user.');
    }

    const taskId = await findTaskIdByUserCategoryAndTitle(userId, categoryId, description);
    if (!taskId) {
        throw new Error('Task not found for this user in the specified category.');
    }

    const updatedTask = await updateTask(taskId, categoryId, newDescription, is_completed);
    return updatedTask;
}


async function deleteTaskService(Id){
    const task = await deleteTaskById(Id) ;
    return task;
}


async function addTask(categoryName, description, is_completed, userId) {
    const categoryId = await findCategoryIdByName(categoryName, userId); // Correctly assign categoryId
    if (!categoryId) {
        throw new Error('Category not found for this user.');
    }
    const task = await createTask(categoryId, description, is_completed); // Pass categoryId correctly
    return task;
}

export{
    getTaskService,
    getTaskServiceId,
    updateTaskService,
    deleteTaskService,
    addTask
}