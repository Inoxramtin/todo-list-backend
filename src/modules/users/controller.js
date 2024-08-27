
import{getUsersService,createUserService, updateUsersService, loginUserService, deleteUsersService} from '../../service/seviceUser.js'



const getUserById =async(req, res, next) =>{ 
    try {
    const userId = req.user.id;
    const user =  await getUsersService(userId);
      if(user === null ){
        res.status(404).json({
            message: `the user with id=${userId} is not exist `
        });
    }else{
        res.json(user);
    }
} catch (error) {
    console.log(error)
    res.status(500).json({
        message: error.message
    });
}

}


const userCreate = async (req , res, next) => {
    try {
        const {first_name, last_name, number, email, username, password} = req.body;
         await createUserService(first_name, last_name, number, email, username, password);
        res.status(201).json({
          message: `user  created successfully`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
        
    }
}

const userUpdate = async (req , res, next) => {
    try {
        const userId = req.user.id;
        const {first_name,last_name , number,username,password} = req.body
        const updateId = await updateUsersService(userId,first_name,last_name , number,username,password);
        res.json({
            message:`update is complet`
        })

    }catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
        
    }
}




const loginUserCreate = async (req , res, next) => {
    try {
        const { username, password} = req.body;
        const jwt = await loginUserService( username, password);
        res.status(200).json({
          jwt: jwt
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message: error.message
        });
        
    }
}

const deleteUserById =async(req, res, next) =>{ 
    try {
    const userId = req.user.id;
    const user =  await deleteUsersService(userId);
      if(user === null ){
        res.status(404).json({
            message: `the user with id=${userId} is not exist `
        });
    }else{
        res.json('Your account has been successfully deleted');
    }
} catch (error) {
    console.log(error)
    res.status(500).json({
        message: error.message
    });
}

}





export {
    getUserById,
    userCreate,
    userUpdate,
    loginUserCreate,
    deleteUserById
}