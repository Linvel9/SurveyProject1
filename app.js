const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const SurveyCreateRoutes = require('./routes/surveys')
const app = express()

mongoose.connect('asdsadad')
.then(() => console.log("MongoDb connected"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/surveys', SurveyCreateRoutes)

module.exports = app