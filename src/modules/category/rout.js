import express from 'express'
import {createCategory,categoryUpdate,categoryDelete} from './controller.js'
import{authValidationMiddlewares} from '../../core/middlewares/auth-midderwares.js'

const routerCategory = express.Router();



console.log("routerCategory ===",routerCategory )
routerCategory.post('/api/createCategory', authValidationMiddlewares ,createCategory);
routerCategory.put('/api/updateCategory', authValidationMiddlewares, categoryUpdate);
routerCategory.delete('/api/deleteCategory',authValidationMiddlewares , categoryDelete);



export {
    routerCategory
}