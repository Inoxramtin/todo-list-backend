import {getUsersById as getUsersByIdService, createUsers,updateUsers,getUsersByUsername} from '../model/users/users.js'
import { hash , validateHash} from '../core/utils/encryption/index.js';
import { jwtSign } from '../core/auth/jwt-auth.js';



async function getUsersService(userId){
    const user = await getUsersByIdService(userId) ;
    if(user === null || user === undefined || user.length===0){
        return null;
    }
    return user[0]
}

async function createUserService(first_name, last_name, number, email, username, password){
    const encryptedPassword =  await hash(password);
    const user = await createUsers(first_name, last_name, number, email, username, encryptedPassword);
    return user
}

async function updateUsersService(Id,first_name,last_name , number,username,password){
    const user = await updateUsers(Id,first_name,last_name , number,username,password);
    return user
}




async function loginUserService(username, password) {
    const user = await getUsersByUsername(username);
    if(!user){
        throw new Error("Username or Password is not correct")
    }
    const validatedHash = await validateHash(password, user.password);
    if(!validatedHash){
        throw new Error("Username or Password is not correct")
    }
    const jwtUserData ={
        id: user.id,
        username: user.username,

    }
    const userjwt = jwtSign(jwtUserData)
    return userjwt
}






export{
    getUsersService,
    createUserService,
    updateUsersService,
    loginUserService

}