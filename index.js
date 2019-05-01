const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const jsonRoutes = require('./routes/jsonRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(jsonRoutes);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.listen(3000,function(req,res,next){
    console.log('App is running on port 3000');
})