const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql'); 
const app = express(); 
app.use(cors()); 
app.use(bodyParser.json()); 
const db = mysql.createConnection(
    {   host: 'localhost',     
        user: 'root',    
        password: 'password',     
        database: 'form_db'}); 
db.connect(err => {     
    if (err) throw err;     
    console.log('MySQL Connected...'); 
}); 

app.post('/submit', (req, res) => {     
    const formData = req.body;     
    const sql = 'INSERT INTO form_data SET ?';  

    db.query(sql, formData, (err, result) => {         
        if (err) throw err;         
        res.send('Form data saved');  
    });
});


app.listen(5000, () => { 
    console.log('Server started on port 5000'); 
});