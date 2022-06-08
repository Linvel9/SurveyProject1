const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const SurveyCreateRoutes = require('./routes/surveys')
const app = express()

mongoose.connect('mongodb+srv://Host:HostPassword@cluster0.ufsdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("MongoDb connected"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/surveys', SurveyCreateRoutes)

module.exports = app