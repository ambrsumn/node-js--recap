import { Sequelize } from "sequelize";


export const sequelizeMethod = new Sequelize('expressapp', 'root', 'Ambr@#1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export const dbConnection = async() =>
{
    try
    {
        await sequelizeMethod.authenticate();
        console.log('Database connected successfully'); 
    }
    catch(error)
    {
        console.log('Database connection failed', error);
    }
}