const express = require('express');
const controller = require('./controllers');
const expressLayouts = require('express-ejs-layouts');
const db = require('./db');

const app = express();

db.connect();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', controller.listUsers);
app.get('/add', controller.addUsers);
app.post('/add-user', controller.createNewUser);
app.delete('/delete-user/:id', controller.deleteUser);


app.listen(3000, () => {
    console.log('App is running on port 3000');
})