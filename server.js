const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const routesPage = require('./routes/page');
const { response } = require('express');

const app = express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.use(routesPage);


app.listen(4000,()=>{
    console.log('Server is runing on Port 4000');
});