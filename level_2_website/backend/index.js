require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err=> { 
    if(err){
        console.error('Error connecting to MySQL:', err);
        process.exit(); 
    }
    console.log('Connected to MySQL');
})

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err,results) => {
        if (err){
            console.error('Error fetching users:', err);
            return res.status(500).send('An error occured while fetching users.');
        }
        res.json(results);
    });
});

app.get('/users/:id', (req, res)=>{
    const sql = 'SELECT * FROM users WHERE id =?';
    const user = req.params.id;
    
    db.query(sql, [user], (err, results) => {
        if(err){
            console.error('Error fetching user:', err);
            return res.status(500).send('An error occured while fetching the user');
        }
        if(results.length === 0){
            return res.status(400).send('User not found');
        }
        res.json(results[0]);
    });
});

app.post('/users', (req,res)=>{
    const {name, email} = req.body;
    const sql = 'INSERT INTO users (name,email) VALUES (?,?)';
    db.query(sql,[name,email], (err,results)=>{
        if(err){
            console.error('Error creating users:', err);
            return res.status(500).send('An error occured while creating the user');
        }
        res.status(201).json({id: results.insertId, name, email});
    });
});

app.post('/users/:id', (req, res)=>{
    const {name,email} = req.body;
    const sql = 'UPDATE users SET name = ?, email = ?, WHERE id = ?';
    db.query(sql, [name,email], (err,results)=>{
        if(err){
            console.error('Error updating users:', err);
            return res.status(500).send('An error occured while updating the user');
        }
        res.json({id: userId, name,email });
    });
});

app.delete('/users/:id', (req, res)=>{
    const userId = req.body;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [userId], (err,results)=>{
        if(err){
            console.error('Error deleting users:', err);
            return res.status(500).send('An error occured while deleting the user');
        }
        res.json({message: 'User deleted successfully.' });
    });
});


const port = process.env.port || 5000; 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

