

const getAlltask = async (req, res) => {
    res.send('Retrieving a list of task');
}

const getTask = (req, res) => {
    res.send('Retrieving a single task');
}

const postTask = (req, res) => {
    res.send('Creating a task');
}

const putTask = (req, res) => {
    res.send('Updating a task');
}

const deleteTask = (req, res) => {
    res.send('Deleting a task');
}





module.exports ={ 
    getAlltask,
    getTask,
    postTask,
    putTask,
    deleteTask
}