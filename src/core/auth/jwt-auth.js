import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../secrets/index.js";

function jwtSign(data){
return jwt.sign(data, JWT_SECRET)
}



function jwtvalidate(jwt){
    try {
        return jwt.verify(jwt, JWT_SECRET.signKey )
    } catch (error) {
        console.log(error);
        return null;
    }
}


export{
    jwtSign,
    jwtvalidate
}