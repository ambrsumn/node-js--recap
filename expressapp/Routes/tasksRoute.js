import express from 'express';
import { getTasks } from '../Controllers/tasksController.js';

const router = express.Router();



router.get('/', getTasks);
router.get('/:id', getTasks);
// router.post('/', addTasks);
// router.put('/:id', updateTasks);
// router.delete('/:id', deleteTasks);

// export {router as tasksRoute};
export  {router as tasksRoute};


