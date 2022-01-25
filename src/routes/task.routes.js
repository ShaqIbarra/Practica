const { Router } = require ('express');
const router = Router();

router.get('/task', (req, res) => {
    res.send('Retrieving a list of task');
})

router.get('/task/10', (req, res) => {
    res.send('Retrieving a single task');
})

router.post('/task', (req, res) => {
    res.send('Creating a task');
})

router.delete('/task', (req, res) => {
    res.send('Deleting a task');
})

router.put('/task', (req, res) => {
    res.send('Updating a task');
})



module.exports = router;