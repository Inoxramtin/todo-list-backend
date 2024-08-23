import express from 'express' ;
import{getUserById , userCreate, userUpdate, loginUserCreate } from './controller.js'
import{getUserByIdValidator, createUserValidator } from './validation.js '

const routerUser = express.Router();


routerUser.get('/api/users/:id', getUserByIdValidator ,getUserById);

routerUser.post('/api/singup',createUserValidator , userCreate)


routerUser.put('/api/users/:id', getUserByIdValidator, createUserValidator,userUpdate );

routerUser.post('/api/signin' , loginUserCreate)

export{
    routerUser
}