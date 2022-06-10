const Answer = require('../models/answer-model')
const errorHandler = require('../utils/ErrorHandler')

module.exports.create = async function(req, res) {
    try {
    const answer = await new Answer({
        Answer: req.body.Answer
    }).save()
    res.status(201).json(answer)
    } catch (e) {
        errorHandler(res, e)
    }    
}

module.exports.getByID = async function(req, res) {
    try{
        const answer = await Answer.find({
            _id: req.params.id
        })
        res.status(200).json(answer)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try{
        const answer = await Answer.remove({
            _id: req.params.id
        })
        res.status(200).json(answer)
    } catch (e) {
        errorHandler(res, e)
    }
}