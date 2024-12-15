import{createTaskService, updateTaskService, getTaskByCategoryIdService, deleteTaskService} from "../../service/seviceTask.js"

async function createTaskController(req, res, next) {
    const userId = req.user.id; 
    const { category_id, description, is_completed } = req.body; 
    try {
      const task = await createTaskService(userId, category_id, description, is_completed);
      res.status(201).json(task);
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  async function updateTaskController(req, res, next) {
    const userId = req.user.id; 
    const { task_id } = req.params;  
    const {category_id, description, is_completed } = req.body; 
  
    try {
      const updatedTask = await updateTaskService(task_id, userId, category_id, description, is_completed);
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found or you are not authorized' });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async function getTasksByCategoryIdController(req, res, next) {
    const userId = req.user.id
    const { category_id } = req.params; 

    try {
      const tasks = await getTaskByCategoryIdService(userId, category_id);
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  async function deleteTaskController(req, res, next) {
    const userId = req.user.id; 
    const { id, category_id} = req.body; 
    try {
      const task = await deleteTaskService(userId, id,  category_id);
      res.status(201).json("delete  a task is complet");
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  export{
    createTaskController,
    updateTaskController,
    getTasksByCategoryIdController,
    deleteTaskController
  };