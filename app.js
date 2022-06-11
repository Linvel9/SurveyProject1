const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const SurveyCreateRoutes = require('./routes/surveys')
const AnswerCreateRoutes = require('./routes/answer')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/newwdb')
.then(() => console.log("MongoDb connected"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/surveys', SurveyCreateRoutes)
app.use('/api/answers', AnswerCreateRoutes)

module.exports = app