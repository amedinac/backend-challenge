
const { Sequelize } = require('sequelize');
const setupModels = require('../models');

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;


const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host:host,
        dialect:'mysql'
    }
);

const dbConnect = async () => {
    try{
        await sequelize.authenticate();
        console.log('MySql conexion correcta!');
    }catch(e){
        console.log('MySql error de conexion!', e);
    }
};

setupModels(sequelize);
sequelize.sync({force:true});

module.exports = {sequelize, dbConnect}