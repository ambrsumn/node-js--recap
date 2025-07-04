// import { request, response } from "express";
import { globalResponse } from "../Utils/globalResponse.js";
import { errorHandler } from "../Utils/errorHandler.js";
import fs from 'fs';

export const getTasks = async(req, res, next) =>
{
    const id = +req.params.id || -1;

    try
    {
        const data = await fs.promises.readFile('./static/tafsks.json', 'utf-8');

        const tasks = JSON.parse(data);
    
        if(id === -1)
        {
            globalResponse(req, res, 200, 'Success', tasks);
        }
        else 
        {
            const selectedTask = tasks.filter((task)=>
            {
                return task.id === id;
            }) || [];
            
            if(selectedTask.length !== 0)
            {
                globalResponse(req, res, 200, 'Success', selectedTask);
            }
            else
            {
                globalResponse(req, res, 404, 'Not Found', []);
            }
        }
    }
    catch(error)
    {
        next(error)
    }
}