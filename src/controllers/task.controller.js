const pool = require('../db')

const getAlltask = async (req, res) => {
    res.send('Retrieving a list of task');
};

const getTask = (req, res) => {
    res.send('Retrieving a single task');
};

const postTask = async (req, res) => {
    const {title, description} = req.body

  const result = await pool.query("INSERT INTO task (title, description) VALUES ($1, $2)", [
      title,
      description,
  ]);

    res.send('Creating a task');
};

const putTask = (req, res) => {
    res.send('Updating a task');
};

const deleteTask = (req, res) => {
    res.send('Deleting a task');
};

 



module.exports = { 
    getAlltask,
    getTask,
    postTask,
    putTask,
    deleteTask
};