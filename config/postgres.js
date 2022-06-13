
const { Sequelize } = require('sequelize');

const database = process.env.POSTGRES_DB;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host:host,
        dialect:'postgres'
    }
);

const dbConnect = async () => {
    try{
        await sequelize.authenticate();
        console.log('Postgres conexion correcta!');
    }catch(e){
        console.log('Postgres error de conexion!', e);
    }
};


module.exports = {sequelize, dbConnect}