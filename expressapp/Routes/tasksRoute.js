import express from 'express';
import { getTasks } from '../Controllers/tasksController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware('Engineer'));

router.get('/', getTasks);
router.get('/:id', getTasks);
// router.post('/', addTasks);
// router.put('/:id', updateTasks);
// router.delete('/:id', deleteTasks);

// export {router as tasksRoute};
export  {router as tasksRoute};


