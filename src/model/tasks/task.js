import { query } from '../../core/database/database-handler.js';


async function createTask (userId, categoryId, description, isCompleted) {
    const sql = `INSERT INTO tasks
     (user_id, category_id, description, is_completed) 
     VALUES ($1, $2, $3, $4) RETURNING * `
     const result = await query(sql, [userId, categoryId, description, isCompleted]);
    return result.rows;

}

async function updateTask(taskId, userId, categoryId, description, isCompleted) {
    const sql =    `UPDATE tasks
    SET description = $4, is_completed = $5
    WHERE id = $1 AND user_id = $2 AND category_id = $3
    RETURNING *`;
       const result = await query(sql ,[taskId, userId, categoryId, description, isCompleted])
       return result.rows
}


async function getTaskByCategoryId(userId, category_id) {
 const sql = `
    SELECT * FROM tasks
    WHERE user_id = $1 AND category_id = $2;
   `;
    const result = await query(sql,[userId, category_id]) 
    return result.rows
    
}


async function deleteTask(user_id, id , category_id) {
    const sql = ` DELETE FROM tasks
    WHERE user_id = $1 AND id = $2 AND category_id = $3
    RETURNING *`;
    const result = await query(sql,[user_id, id , category_id]);
    return result.rows;
}



export{
    createTask,
    updateTask,
    getTaskByCategoryId,
    deleteTask
}