import Joi from 'joi';


const getTasksByIdValidator = async (req, res, next)=>{
try {
    const schema = Joi.object({
        id: Joi.number().required()
    }).required();
    const validationResult = await schema.validateAsync(req.params);
    req.validatedParams = validationResult
    next();
} catch (error) {
    console.log(error)
    res.json({message: error.message})
}
}

const getTasksByUserIdValidator = async (req, res, next)=>{
    try {
        const schema = Joi.object({
            user_id: Joi.number().required()
        }).required();
        const validationResult = await schema.validateAsync(req.params);
        req.validatedParams = validationResult
        next();
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
    }
    const createTasksValidator =  async(req, res,next) => {
        try {
            const schema = Joi.object({
                user_id: Joi.string().required(),
                title:Joi.string().required(),
                  description: Joi.string().required(),
                  is_completed: Joi.boolean().required()
            }).required();
            const validationResult = await schema.validateAsync(req.body);
            console.log(req.body)
            console.log(validationResult);
            req.validatedBody = validationResult;
            next();
        } catch (error) {
            console.log(error)
            res.json({message: error.message})
        }
        
        }
        const updateTasksValidator =  async(req, res,next) => {
            try {
                const schema = Joi.object({
                    title:Joi.string().required(),
                      description: Joi.string().required(),
                      is_completed: Joi.boolean().required()
                }).required();
                const validationResult = await schema.validateAsync(req.body);
                console.log(req.body)
                console.log(validationResult);
                req.validatedBody = validationResult;
                next();
            } catch (error) {
                console.log(error)
                res.json({message: error.message})
            }
            
            }
    


export{
    getTasksByIdValidator,
    getTasksByUserIdValidator,
    createTasksValidator,
    updateTasksValidator
}