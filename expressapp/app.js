import express from 'express';
import {tasksRoute} from './Routes/tasksRoute.js';
import { errorHandler } from './Utils/errorHandler.js';
import fs from 'fs';

const app = express();

app.use(express.json());


app.get('/', (req, res)=>
{
    console.log("Hello World");
    res.status(200).json({
        message: "Hello world"
    })
})

app.use('/tasks', tasksRoute);

app.use(errorHandler);

app.listen(8080, ()=>
{
    console.log("Server is running on port 8080 ");
})