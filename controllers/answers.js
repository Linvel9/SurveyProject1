const Answer = require('../models/answer-model')
const errorHandler = require('../utils/ErrorHandler')

module.exports.create = async function(req, res) {
    try {
    const answer = await new Answer({
        Answer: req.body.Answer
    }).save()
    res.status(201).json(survey)
    } catch (e) {
        errorHandler(res, e)
    }    
}