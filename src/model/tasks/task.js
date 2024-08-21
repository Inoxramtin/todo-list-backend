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

async function createTask(user_id,title , description, is_completed){
    const sql = `
    INSERT INTO tasks_list
    (user_id,title , description, is_completed)
    values
    ($1 , $2 , $3, $4);
    `;
    const result = await query(sql,[user_id, title, description, is_completed]);
    return result;
}


async function updateTask(id ,title, description, is_completed){
    const sql = `
    UPDATE tasks_list
     SET  title= $1, description= $2, is_completed= $3
     WHERE id = $4 `
    const result = await query(sql, [ title, description, is_completed, id]);
    return result;
}

async function deleteTaskById(id){
    const sql = `DELETE 
    FROM tasks_list
     WHERE id = $1`
     const result = await query(sql,[id]);
     return result;

}


export{
    getTasksListByUserId,
    getTasksListById,
    createTask,
    updateTask,
    deleteTaskById
}