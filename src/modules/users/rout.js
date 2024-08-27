import express from 'express' ;
import{getUserById , userCreate, userUpdate, loginUserCreate, deleteUserById } from './controller.js'
import{getUserByIdValidator, createUserValidator } from './validation.js '
import{authValidationMiddlewares} from '../../core/middlewares/auth-midderwares.js'

const routerUser = express.Router();


routerUser.get('/api/usersId', authValidationMiddlewares ,getUserById);

routerUser.post('/api/singup',createUserValidator , userCreate)


routerUser.put('/api/ipdateUsers', authValidationMiddlewares,getUserByIdValidator, createUserValidator,userUpdate );

routerUser.post('/api/signin' , loginUserCreate);

routerUser.delete('/api/deleteUser', authValidationMiddlewares, deleteUserById)

export{
    routerUser
}