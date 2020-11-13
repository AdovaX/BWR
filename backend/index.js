const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

 
mc.connect();

 
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});

 
app.get('/backend/usersw', function (req, res) {
  res.json({ msg: "hello"});
   // mc.query('SELECT * FROM tasks', function (error, results, fields) {
       // if (error) throw error;
        //return res.send({ error: false, data: results, message: 'Todos list.' });
    //});
});

 
 

// Add a new todo  
app.post('/todo', function (req, res) {

    let task = req.body.task;

    if (!task) {
        return res.status(400).send({ error:true, message: 'Please provide task' });
    }

    mc.query("INSERT INTO tasks SET ? ", { task: task }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
    });
});


app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
module.exports = app;