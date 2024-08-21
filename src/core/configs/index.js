const portServer =  +process.env['serverPort'];
const Bcrypt_CONFIG={
    rounds: +process.env['BCRYPT_ROUNDS']
}
export{
    portServer,
    Bcrypt_CONFIG
}