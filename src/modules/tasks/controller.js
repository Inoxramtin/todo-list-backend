import{getTaskService, getTaskServiceId,createTaskService, updateTaskService, deleteTaskService} from '../../model/service/seviceTask.js';

const taskByUserId = async (req , res, next)=> {
    try {
        const taskUserId = req.params.user_id;
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
        const taskId = req.params.id;
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

const taskcreate = async (req , res) => {
    try {
        const {user_id,title , description, is_completed} = req.body;
         await createTaskService(user_id,title , description, is_completed);
        res.json({
          message: `the todo added to the database.`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
        
    }
}

const taskUpdate =  async (req , res, next) => {
    try {
        const taskId = req.params.id;
        const {title, description, is_completed} = req.body
        const updateId = await updateTaskService(taskId, title, description, is_completed);
        res.json({
            message:`update is complet`
        })

    }catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
        
    }
}


const taskDelet =  async(req, res, next) => {
    try {
        const taskId = req.params.id;
        const deletTask = await deleteTaskService(taskId);
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
    taskcreate,
    taskUpdate,
    taskDelet
}