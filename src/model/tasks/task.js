import { query } from '../../core/database/database-handler.js';


async function getTasksListByUserId(user_id){
    const sql = 'SELECT * FROM tasks_list WHERE user_id = $1'
    const result = await query(sql, [user_id]);
    return result.rows;
    
};

async function getTasksListById(id){
    const sql = 'SELECT * FROM tasks_list WHERE id = $1'
    const result = await query(sql, [id]);
    return result.rows[0];
    
}


async function deleteTaskById(id){
    const sql = `DELETE 
    FROM tasks_list
     WHERE id = $1`
     const result = await query(sql,[id]);
     return result;

}


async function findCategoryIdByName(categoryName, userId) {
    const sql = `SELECT id FROM Category WHERE Name_Category = $1 AND user_id = $2`;  
    const result = await query(sql, [categoryName, userId]);
    console.log('Category Result:', result); // Debugging line
    return result.rows[0]?.id;  
}



async function findTaskIdByUserCategoryAndTitle(userId, categoryId, description) {
    const sql = `SELECT tasks.id FROM tasks 
                 JOIN Category ON tasks.Category_id = Category.id
                 WHERE tasks.description = $1 AND Category.id = $2 AND Category.user_id = $3`;
    const result = await query(sql, [description, categoryId, userId]);
    return result.rows[0]?.id;  
}


async function createTask(categoryId, description, is_completed) {
    const sql = `
    INSERT INTO tasks 
    (Category_id, description, is_completed)
    VALUES ($1, $2, $3) RETURNING *`; 
    const result = await query(sql, [categoryId, description, is_completed]);
    return result.rows[0];  
}

async function updateTask(taskId, categoryId, description, is_completed) {
    const sql = `UPDATE tasks 
                 SET Category_id = $1, description = $2, is_completed = $3
                 WHERE id = $4 RETURNING *`;
    const result = await query(sql, [categoryId, description, is_completed, taskId]);
    return result.rows[0];
}

export{
    getTasksListByUserId,
    getTasksListById,
    createTask,
    updateTask,
    deleteTaskById,
    findCategoryIdByName,
    findTaskIdByUserCategoryAndTitle
}