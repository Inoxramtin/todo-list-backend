const POSTGRES_CREDENTIALS = {  
    host: process.env['PGHOST'],
    database: process.env['PGDATABASE'],
    user: process.env['PGUSER'],
    password: process.env['PGPASSWORD'],
    port: +process.env['PGPORT'],
    ssl: !!+process.env['PGSSL'],
};



export {
    POSTGRES_CREDENTIALS
}
