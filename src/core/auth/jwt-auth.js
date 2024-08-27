import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets/index.js";

function jwtSign(data){
    console.log("JWT_SECRET =====",  JWT_SECRET );
    return jwt.sign(data, JWT_SECRET.signKey);
}

function jwtvalidate(token){
    try {
        return jwt.verify(token, JWT_SECRET.signKey);
    } catch (error) {
        console.log(error);
        throw new Error("Invalid JWT Token"); 
    }
}


const blacklist = new Set();
const addToBlacklist = (token) => {
    blacklist.add(token);
};

 const isTokenBlacklisted = (token) => {
    return blacklist.has(token);
};


export {
    jwtSign,
    jwtvalidate,
    addToBlacklist,
    isTokenBlacklisted
};
