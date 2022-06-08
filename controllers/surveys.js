const Survey = require('../models/survey-model')
const errorHandler = require('../utils/ErrorHandler')

module.exports.create = async function(req, res) {
    try {
    const survey = await new Survey({
        Survey: req.body.Survey
    }).save()
    res.status(201).json(survey)
    } catch (e) {
        errorHandler(res, e)
    }    
}

module.exports.getByID = async function(req, res) {
    try{
        const survey = await Survey.find({
            Survey: req.params.SurveysId
        })
        res.status(200).json(survey)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try{
        const survey = await Survey.remove({
            _id: req.params.id
        })
        res.status(200).json(survey)
    } catch (e) {
        errorHandler(res, e)
    }
}