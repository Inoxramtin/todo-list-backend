import {getUsersById as getUsersByIdService, createUsers,updateUsers} from '../user/user.js'

async function getUsersService(userId){
    const user = await getUsersByIdService(userId) ;
    if(user === null || user === undefined || user.length===0){
        return null;
    }
    return user[0]
}

async function createUserService(first_name,last_name , number,username,password){
    const user = await createUsers(first_name,last_name , number,username,password);
    return user
}

async function updateUsersService(Id,first_name,last_name , number,username,password){
    const user = await updateUsers(Id,first_name,last_name , number,username,password);
    return user
}











export{
    getUsersService,
    createUserService,
    updateUsersService
}