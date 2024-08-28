import{getTaskService, getTaskServiceId, updateTaskService, deleteTaskService, addTask} from '../../service/seviceTask.js';

const taskByUserId = async (req , res, next)=> {
    try {
        const taskUserId = req.user.user_id;
        const task =  await getTaskService(taskUserId);
          if(!task || task.length <= 0 ){
            res.status(404).json({
                message: `the task with user_id=${taskUserId} is not exist `
            });
        }else{
            res.json(task);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}


const taskById = async (req , res, next)=> {
    try {
        const taskId = req.user.id;
        const task =  await getTaskServiceId(taskId);
          if(!task || task.length <= 0 ){
            res.status(404).json({
                message: `the task with user_id=${taskId} is not exist `
            });
        }else{
            res.json(task);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}

const taskCreate = async (req, res) => {
    try {
        const { categoryName, description, is_completed } = req.body;
        const userId = req.user ? req.user.id : null; 

        if (!userId) {
            return res.status(400).json({ message: 'User ID is missing' });
        }

        const task = await addTask(categoryName, description, is_completed, userId);
        res.json({
            message: 'Task added successfully.',
            task: task  
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
}

async function updateTask(req, res) {
    const { categoryName, newDescription, description, is_completed } = req.body;
    const userId = req.user.id; 

    try {
        const updatedTask = await updateTaskService(categoryName, newDescription, description, is_completed, userId);
        res.status(200).json(updatedTask);
    } catch (err) {
        console.error(err.message);
        res.status(400).json({ error: err.message });
    }
}



const taskDelete =  async(req, res, next) => {
    try {
        const taskId = req.user.id;
        const deletTask = await deleteTaskService(taskName,taskId);
        res.json({
            message:`Task deleted`
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}



export{
    taskByUserId,
    taskById,
    taskCreate,
    updateTask,
    taskDelete
}