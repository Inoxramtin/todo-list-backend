import bcrypt, { hash } from "bcrypt";
import { Bcrypt_CONFIG  } from "../../configs/index.js";

async function hash(input) {
    try {
        const salt = await bcrypt.genSalt(Bcrypt_CONFIG.rounds);
        const hash = await bcrypt.hash(input, salt);
        return hash

        
    } catch (error) {
        console.log(error.message);
        return null;
    }
}


async function validateHash(input, hash) {
    try {
        const compare = await bcrypt.compare(input, hash);
        return compare;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}


export{
    hash,
    validateHash
}