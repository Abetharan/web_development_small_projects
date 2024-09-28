const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const path = require('path');

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',//hidden for git 
    database: '' //hidden for git
});

db.connect((err) => {
    if(err) { 
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL Database')
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');    
})

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    const message = req.body.message;
    if (!name) {
        return res.status(400).send('Name is required.');
    }
    if (!email) {
        return res.status(400).send('Email is required.');
    }
    if (!gender) {
        return res.status(400).send('Gender is required.');
    }
    if (!message) {
        return res.status(400).send('Message is required.');
    }
    const query = 'INSERT INTO users (name, email, gender, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, gender, message], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Server error. Please try again later.');
            return;
        }
        res.send(`Name "${name}" has been submitted successfully.`);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });