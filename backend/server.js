const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const env = process.env.NODE_ENV || 'databaseConfig';
const config = require('./config')[env];

const app = express();

const connection = mysql.createConnection({
  ...config
});

connection.connect(err => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log('Successfully connected to the database');
  }
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Default route');
});

// roleLink gets list of links assigned to a specific role
app.post('/roleLink', (req, res) => {
  const { role } = req.body;
  const command = `SELECT * FROM roleLink WHERE role = '${role}'`;
  connection.query(command, (err, result) => {
    if (err) {
      return res.json({ err });
    } else {
      return res.json({ result });
    }
  });
});

app.post('/signUp', (req, res) => {
  const { firstName, lastName, role, username } = req.body;
  const command = `INSERT INTO admin_portal.person (firstName, lastName, role, username) VALUES ('${firstName}', '${lastName}', '${role}', '${username}')`;
  connection.query(command, (err, result) => {
    if (err) {
      return res.json({ err });
    } else {
      return res.json({ result });
    }
  });
});

app.get('/userInfo', (req, res) => {
  const command = `SELECT id, firstName, lastName, role FROM person`;
  connection.query(command, (err, result) => {
    if (err) {
      return res.json({ err });
    } else {
      return res.json({ personList: result });
    }
  });
});

app.post('/modifyRole', (req, res) => {
  const { id, role } = req.body;
  const command = `UPDATE person SET person.role = '${role}' WHERE person.id = ${id}`;
  connection.query(command, (err, result) => {
    if (err) {
      return res.json({ err });
    } else {
      return res.json({ result });
    }
  });
});

app.listen(5000, () => 'Server started on port 5000');
