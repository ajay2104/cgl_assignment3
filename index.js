const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(adminRoutes);

app.use('/static', express.static(path.join(__dirname, 'public')));




app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.listen(3000,function(req,res,next){
    console.log('App is running on port 3000');
})