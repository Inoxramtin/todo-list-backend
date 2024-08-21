import Joi from 'joi';


const getUserByIdValidator = async (req, res, next)=>{
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


const createUserValidator =  async(req, res,next) => {
try {
    const schema = Joi.object({
        first_name: Joi.string().required(),
         last_name:Joi.string().required(),
          number: Joi.string().required(),
          username: Joi.string().alphanum().min(3).max(30).required(),
           password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
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
    getUserByIdValidator,
    createUserValidator 
}