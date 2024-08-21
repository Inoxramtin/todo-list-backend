import cors from 'cors';
const apiLoggerMiddlewares = (req, res, next) => {
    console.log(`${req.method} - ${req.path} - ${req.ip}`);
    next()
}
const errorMiddlewares =(req, res, next) => {
    res.status(404).json({message: `the route ${req.path} is not found`})

}


const corsMiddlewares = cors()

export{
    apiLoggerMiddlewares,
    errorMiddlewares,
    corsMiddlewares
}