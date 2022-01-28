const { Router } = require ('express');
const { getAlltask, getTask, postTask, deleteTask, putTask } = require('../controllers/task.controller')
const router = Router();

router.get('/task', getAlltask)

router.get('/task/10', getTask)

router.post('/task', postTask)

router.delete('/task', deleteTask)

router.put('/task', putTask)



module.exports = router;