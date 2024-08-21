import express from 'express' ;
import{getUserById , userCreate, userUpdate } from './controller.js'
import{getUserByIdValidator, createUserValidator } from './validation.js '

const routerUser = express.Router();


routerUser.get('/api/users/:id', getUserByIdValidator ,getUserById);

routerUser.post('/api/users',createUserValidator , userCreate)


routerUser.put('/api/users/:id', getUserByIdValidator, createUserValidator,userUpdate );



export{
    routerUser
}