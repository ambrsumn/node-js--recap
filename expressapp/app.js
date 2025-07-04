import express from 'express';
import {tasksRoute} from './Routes/tasksRoute.js';
import { errorHandler } from './Utils/errorHandler.js';
import fs from 'fs';
import {User} from './Models/userModel.js';
import { dbConnection, sequelizeMethod } from './config/dbConfig.js';
import { userRouter } from './Routes/userRoute.js';

const app = express();

app.use(express.json());

(async () =>
{
    try
    {
        await dbConnection();
        console.log("Database connected successfully");

        await sequelizeMethod.sync();
        console.log("Database synced successfully");
    }
    catch(error)
    {
        console.log(error);
    }
})();


app.get('/', (req, res)=>
{
    console.log("Hello World");
    res.status(200).json({
        message: "Hello world"
    })
})

app.use('/tasks', tasksRoute);
app.use('/user', userRouter);

app.use(errorHandler);

app.listen(8080, ()=>
{
    console.log("Server is running on port 8080 ");
    // dbConnection();
})